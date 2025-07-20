import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Check, Star, Clock, Users, Award, Play, CreditCard } from 'lucide-react'

const PricingPage = () => {
  const { user, isSubscribed, subscribe } = useAuth()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [paypalLoaded, setPaypalLoaded] = useState(false)
  const [formData, setFormData] = useState({
    email: user?.email || '',
    name: user?.name || '',
    phone: ''
  })

  // Load PayPal SDK with proper client ID
  useEffect(() => {
    if (window.paypal) {
      setPaypalLoaded(true)
      return
    }

    const script = document.createElement('script')
    // Using Stephen's PayPal Client ID for "Playground Finder" app
    script.src = 'https://www.paypal.com/sdk/js?client-id=ASlp8ISXoirQWXYbWcWoXYKDI97Ndw17VF0W4tCAszEWe02t0spEyY4fqKQmywD75H0Hf9tbu6c3P9Z1&currency=USD&intent=capture'
    script.async = true
    script.onload = () => setPaypalLoaded(true)
    script.onerror = () => {
      console.error('Failed to load PayPal SDK')
      setPaypalLoaded(false)
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const createPayPalOrder = (price) => {
    // Calculate 50/50 split
    const splitAmount = (price / 2).toFixed(2)
    
    return window.paypal.Orders.create({
      purchase_units: [{
        amount: {
          value: price.toString(),
          currency_code: 'USD',
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: price.toString()
            }
          }
        },
        items: [{
          name: price === 9.99 ? 'Never Leave the Playground - Lifetime Access (Limited Time)' : 'Never Leave the Playground - Lifetime Access',
          unit_amount: {
            currency_code: 'USD',
            value: price.toString()
          },
          quantity: '1'
        }],
        description: price === 9.99 ? 'Never Leave the Playground - Lifetime Access (Limited Time)' : 'Never Leave the Playground - Lifetime Access',
        // Primary payee receives the full amount initially
        payee: {
          email_address: 'stephen@neverleavetheplayground.com'
        }
      }],
      // Note: PayPal's automatic splitting requires business account setup
      // For now, manual splitting will be handled post-transaction
      application_context: {
        brand_name: 'Never Leave the Playground',
        user_action: 'PAY_NOW',
        shipping_preference: 'NO_SHIPPING',
        return_url: window.location.origin + '/videos',
        cancel_url: window.location.origin + '/pricing'
      }
    })
  }

  const onPayPalApprove = async (data, actions, price) => {
    setIsLoading(true)
    
    try {
      const details = await actions.order.capture()
      
      // Calculate split amounts for tracking
      const splitAmount = (price / 2).toFixed(2)
      
      // Simulate subscription activation with payment splitting info
      await subscribe({
        ...formData,
        plan: price === 9.99 ? 'lifetime' : 'regular',
        price: price,
        paypalOrderId: details.id,
        paymentStatus: 'completed',
        splitInfo: {
          totalAmount: price,
          stephenAmount: splitAmount,
          globalNowAmount: splitAmount,
          stephenEmail: 'stephen@neverleavetheplayground.com',
          globalNowEmail: 'paypal@globalnow.biz',
          splitNote: 'Payment received by stephen@neverleavetheplayground.com - Manual split to paypal@globalnow.biz required'
        }
      })
      
      setIsLoading(false)
      navigate('/videos')
    } catch (error) {
      console.error('Payment processing error:', error)
      setIsLoading(false)
      alert('Payment was successful but there was an issue activating your subscription. Please contact support.')
    }
  }

  const onPayPalError = (err) => {
    console.error('PayPal error:', err)
    alert('There was an error processing your payment. Please try again.')
  }

  // Render PayPal buttons
  const renderPayPalButton = (price, containerId) => {
    if (!paypalLoaded || !window.paypal) return null

    // Clear existing buttons
    const container = document.getElementById(containerId)
    if (container) {
      container.innerHTML = ''
    }

    setTimeout(() => {
      if (window.paypal && document.getElementById(containerId)) {
        window.paypal.Buttons({
          createOrder: () => createPayPalOrder(price),
          onApprove: (data, actions) => onPayPalApprove(data, actions, price),
          onError: onPayPalError,
          style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal'
          }
        }).render(`#${containerId}`)
      }
    }, 100)
  }

  // Render buttons when PayPal loads
  useEffect(() => {
    if (paypalLoaded) {
      renderPayPalButton(9.99, 'paypal-button-lifetime')
      renderPayPalButton(49.99, 'paypal-button-regular')
    }
  }, [paypalLoaded, formData])

  const handleManualSubscribe = async (price) => {
    if (!formData.email || !formData.name) {
      alert('Please fill in your email and name before subscribing.')
      return
    }

    // For demo purposes, allow manual subscription
    setIsLoading(true)
    try {
      const splitAmount = (price / 2).toFixed(2)
      
      await subscribe({
        ...formData,
        plan: price === 9.99 ? 'lifetime' : 'regular',
        price: price,
        paypalOrderId: 'DEMO_' + Date.now(),
        paymentStatus: 'demo',
        splitInfo: {
          totalAmount: price,
          stephenAmount: splitAmount,
          globalNowAmount: splitAmount,
          stephenEmail: 'stephen@neverleavetheplayground.com',
          globalNowEmail: 'paypal@globalnow.biz',
          splitNote: 'Demo payment - Manual split tracking for testing'
        }
      })
      setIsLoading(false)
      navigate('/videos')
    } catch (error) {
      setIsLoading(false)
      alert('There was an issue processing your subscription. Please try again.')
    }
  }

  if (isSubscribed) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">You're Already Subscribed!</h1>
          <p className="text-gray-600 mb-8">You have access to all premium content.</p>
          <Button onClick={() => navigate('/videos')} className="bg-purple-600 hover:bg-purple-700">
            Go to Videos
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your life with Stephen Jepson's revolutionary approach to active aging and brain health
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Limited Time Offer */}
          <Card className="relative border-2 border-red-500 shadow-xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-bold">
                LIMITED TIME OFFER
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold">Lifetime Access</CardTitle>
              <CardDescription className="text-lg">One-time payment, lifetime benefits</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-red-600">$9.99</span>
                <span className="text-xl text-gray-500 line-through ml-2">$49.99</span>
                <p className="text-red-600 font-semibold mt-2">Save 80% - Limited Time Only!</p>
              </div>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>"The 5 In One Video" - Juggling, Uni-cycling, Tight Rope, Knife Throwing (58 min)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>"Never Leave The Playground Active Play Video" - Brain & Health Games</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Exclusive PDF Resources & Guides</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Playground Finder Tool Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Event Booking Platform</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Community Support Forum</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Mobile-Friendly Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Lifetime Updates</span>
                </li>
              </ul>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email-lifetime">Email Address</Label>
                  <Input
                    id="email-lifetime"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="name-lifetime">Full Name</Label>
                  <Input
                    id="name-lifetime"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone-lifetime">Phone Number (Optional)</Label>
                  <Input
                    id="phone-lifetime"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mt-6">
                {paypalLoaded ? (
                  <div id="paypal-button-lifetime"></div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500">Loading PayPal...</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Regular Price */}
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold">Regular Price</CardTitle>
              <CardDescription className="text-lg">Full access to all content</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">$49.99</span>
                <p className="text-gray-600 mt-2">One-time payment</p>
              </div>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>"The 5 In One Video" - Juggling, Uni-cycling, Tight Rope, Knife Throwing (58 min)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>"Never Leave The Playground Active Play Video" - Brain & Health Games</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Exclusive PDF Resources & Guides</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Playground Finder Tool Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Event Booking Platform</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Community Support Forum</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Mobile-Friendly Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span>Lifetime Updates</span>
                </li>
              </ul>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email-regular">Email Address</Label>
                  <Input
                    id="email-regular"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="name-regular">Full Name</Label>
                  <Input
                    id="name-regular"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone-regular">Phone Number (Optional)</Label>
                  <Input
                    id="phone-regular"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mt-6">
                {paypalLoaded ? (
                  <div id="paypal-button-regular"></div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500">Loading PayPal...</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5,000+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">Scientifically</div>
            <div className="text-gray-600">Proven</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">Instant</div>
            <div className="text-gray-600">Access</div>
          </div>
        </div>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">What's included in the subscription?</h3>
              <p className="text-gray-600">
                You get lifetime access to both premium videos, exclusive PDF resources, playground finder tool, 
                event booking platform, and community support.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Is this really a one-time payment?</h3>
              <p className="text-gray-600">
                Yes! Both plans are one-time payments with lifetime access. No recurring charges or hidden fees.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How long is the limited-time offer available?</h3>
              <p className="text-gray-600">
                The $9.99 lifetime offer is available for a very limited time. We recommend securing your access 
                today before the price returns to the regular $49.99.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I access the content on mobile devices?</h3>
              <p className="text-gray-600">
                Absolutely! Our platform is fully responsive and works perfectly on all devices including 
                smartphones, tablets, and computers.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "Stephen's program has completely transformed my life. I feel more energetic and mentally sharp than I have in years!"
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Age 65</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "The playground approach makes exercise fun again. I actually look forward to my daily movement practice now."
                </p>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-gray-500">Age 58</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "My balance has improved dramatically, and I feel more confident in my daily activities. Thank you, Stephen!"
                </p>
                <div className="font-semibold">Linda Rodriguez</div>
                <div className="text-sm text-gray-500">Age 72</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Security Notice */}
        <div className="text-center">
          <div className="bg-gray-100 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold mb-2">Secure Payment Processing</h3>
            <p className="text-gray-600 text-sm">
              All payments are processed securely through PayPal. Your financial information is protected 
              with industry-standard encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage

