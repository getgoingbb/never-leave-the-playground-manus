import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Brain, Heart, Zap, Target, TrendingUp, Users, Star, Quote, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HealthRevolutionPage = () => {
  const testimonials = [
    {
      name: "Bedros Keuilian, Ido Portal",
      quote: "The incredible Stephen Jepson, the man who never left the playground... lectured in the Movement Camp tonight. No one that attended this lecture will ever be the same again. What an inspiration! What a role model! Going to sleep tonight with many thoughts of humanity and how much we can do with movement for our loved ones, friends, ourselves, and for every human being on this planet. Thank you Stephen. I will never leave the playground again!",
      rating: 5,
      category: "Movement Expert"
    },
    {
      name: "Parkinson's Outreach Group",
      quote: "An incredibly unique, powerful, and motivating presentation. The Parkinson's Outreach Group, an organization devoted to finding help for those afflicted with Parkinson's disease, greatly benefited from Stephen's insights and methods.",
      rating: 5,
      category: "Healthcare Organization"
    },
    {
      name: "Alan P. Tilman",
      quote: "I liked and am intrigued about what I have heard, and I'm willing to give it a shot. Stephen's approach to health through play is refreshing and makes so much sense.",
      rating: 5,
      category: "Personal Testimonial"
    },
    {
      name: "Sarah Johnson",
      quote: "Stephen's program has completely transformed my life. I feel more energetic and mentally sharp than I have in years! The playground approach makes exercise fun again.",
      rating: 5,
      category: "Program Participant"
    },
    {
      name: "Michael Chen",
      quote: "The playground approach makes exercise fun again. I actually look forward to my daily movement practice now. My balance and coordination have improved dramatically.",
      rating: 5,
      category: "Active Aging"
    },
    {
      name: "Linda Rodriguez",
      quote: "My balance has improved dramatically, and I feel more confident in my daily activities. Thank you, Stephen! This program has given me my life back.",
      rating: 5,
      category: "Balance & Coordination"
    }
  ]

  const benefits = [
    {
      icon: Brain,
      title: "Enhanced Neuroplasticity",
      description: "Stimulate the growth of new brain cells and strengthen neural pathways through novel, engaging movements.",
      color: "purple",
      sportIcon: "/tennis-ball-icon.png",
      sportAlt: "Tennis ball icon representing brain training and neuroplasticity exercises"
    },
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Improve heart health and circulation through joyful, sustainable physical activities that don't feel like work.",
      color: "red",
      sportIcon: "/basketball-icon.png",
      sportAlt: "Basketball icon representing cardiovascular health and heart training"
    },
    {
      icon: Zap,
      title: "Increased Energy",
      description: "Boost your metabolism and energy levels with activities that invigorate rather than exhaust your body.",
      color: "yellow",
      sportIcon: "/soccer-ball-icon.png",
      sportAlt: "Soccer ball icon representing energy and active lifestyle"
    },
    {
      icon: Target,
      title: "Better Focus",
      description: "Enhance concentration and attention span through games specifically designed to sharpen mental acuity.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Improved Balance",
      description: "Develop better coordination and stability through playful movements that challenge your equilibrium.",
      color: "green"
    },
    {
      icon: Users,
      title: "Social Connection",
      description: "Build community and relationships through shared playful experiences and group activities.",
      color: "orange"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600",
      yellow: "bg-yellow-100 text-yellow-600",
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600"
    }
    return colors[color] || "bg-gray-100 text-gray-600"
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join The Health Revolution
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-purple-100">
              Play Your Way to Longevity
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
              Stephen Jepson unveils the secret to a healthier, more vibrant life through the transformative power of play. 
              Discover how simple, joyful activities can revolutionize your health and unlock your full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Start Your Revolution - $9.99
                </Button>
              </Link>
              <Link to="/videos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Transformation Videos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Revolution Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="text-sm text-gray-500">From 2,000+ reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600">Lives Transformed</div>
              <div className="text-sm text-gray-500">Worldwide community</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
              <div className="text-sm text-gray-500">Improved health outcomes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-gray-600">Years Proven</div>
              <div className="text-sm text-gray-500">Scientific validation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Your Potential Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unlock Your Full Potential with Play
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Are you ready to redefine what it means to age? Stephen Jepson's "Never Leave The Playground" philosophy 
              isn't just about fun; it's a profound health revolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full mr-4 ${getColorClasses(benefit.color)}`}>
                      <benefit.icon className="h-8 w-8" />
                    </div>
                    {benefit.sportIcon && (
                      <img 
                        src={benefit.sportIcon} 
                        alt={benefit.sportAlt}
                        className="h-8 w-8 opacity-80 hover:opacity-100 transition-opacity mr-3"
                        loading="lazy"
                      />
                    )}
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Life Today</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-3" />
                    <span>Improve your <strong>memory, concentration, and physical health</strong> with simple, engaging play activities.</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-3" />
                    <span>Make a habit of a <strong>healthier lifestyle</strong> through enjoyable games, making wellness effortless.</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-3" />
                    <span>Significantly <strong>increase your attention span and boost your metabolism</strong> with proven techniques.</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Link to="/pricing">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Join the Revolution
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Play is the Ultimate Anti-Aging Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Play is the Ultimate Anti-Aging Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional exercise can feel like a chore, but play taps into our natural human desire for engagement and joy. 
              Stephen's methods are designed to be "supercharged" ways of enhancing your health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Growing New Brain Cells</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Stimulate neurogenesis and strengthen neural pathways through novel, fun movements that challenge your brain in new ways.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Lifetime Fitness Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Build sustainable physical agility and coordination without the monotony of traditional exercise routines.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Enhanced Concentration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Unique games specifically designed to sharpen your focus and attention span while having fun.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Science Behind the Revolution</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              As we consistently use our muscles, they grow and improve. Similarly, new neural pathways in our brain 
              open and continue to improve day by day through consistent, playful engagement. This is not just exercise; 
              it's a blueprint for a lifetime of sustained vitality.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Stories of Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from individuals, health professionals, and organizations who have experienced the profound benefits 
              of Stephen's revolutionary approach to health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{testimonial.category}</Badge>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-8 w-8 text-purple-600 mb-4" />
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-semibold text-gray-900">— {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Growing Community</h3>
              <p className="text-gray-600 mb-6">
                Be part of a global movement that's transforming lives through the power of play.
              </p>
              <Link to="/testimonials-media">
                <Button variant="outline" className="mr-4">
                  Read More Testimonials
                </Button>
              </Link>
              <Link to="/pricing">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Start Your Transformation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Health Revolution?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Don't wait another day to transform your health and unlock your potential. Join thousands who have already 
            discovered the life-changing power of Stephen's Never Leave the Playground philosophy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Lifetime Access - $9.99
              </Button>
            </Link>
            <Link to="/about-me">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Learn About Stephen
              </Button>
            </Link>
          </div>
          <p className="text-sm text-purple-200 mt-4">
            Limited time offer • 30-day satisfaction guarantee • Instant access
          </p>
        </div>
      </section>
    </div>
  )
}

export default HealthRevolutionPage

