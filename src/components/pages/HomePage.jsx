import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Target, Dumbbell, Gamepad2, BookOpen, Star, Play, Users, Award } from 'lucide-react'

const HomePage = () => {
  const { user, isSubscribed } = useAuth()

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "Brain Neuroplasticity",
      description: "Scientific research shows that playful movement stimulates neuroplasticity, helping your brain form new neural pathways and maintain cognitive function as you age.",
      sportIcon: "/tennis-ball-icon.png",
      sportAlt: "Tennis ball representing coordination and brain training activities"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Balance & Coordination",
      description: "Improve your balance, coordination, and spatial awareness through fun, challenging activities that keep your mind and body engaged.",
      sportIcon: "/basketball-icon.png",
      sportAlt: "Basketball representing balance and coordination training"
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-green-600" />,
      title: "Active Aging",
      description: "Stay physically active and mentally sharp with Stephen's proven methods that make exercise feel like play, not work.",
      sportIcon: "/soccer-ball-icon.png",
      sportAlt: "Soccer ball representing active aging and playful fitness"
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-red-600" />,
      title: "Playground Philosophy",
      description: "Rediscover the joy of movement through playground equipment and activities designed to challenge and delight adults of all ages."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-yellow-600" />,
      title: "Expert Guidance",
      description: "Learn from Stephen Jepson, a pioneer in the field of active aging with decades of experience helping people transform their lives."
    },
    {
      icon: <Star className="h-8 w-8 text-indigo-600" />,
      title: "Proven Results",
      description: "Join thousands who have experienced improved balance, cognitive function, and overall quality of life through this unique approach."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 65,
      text: "Stephen's program has completely transformed my life. I feel more energetic and mentally sharp than I have in years!",
      rating: 5
    },
    {
      name: "Michael Chen",
      age: 58,
      text: "The playground approach makes exercise fun again. I actually look forward to my daily movement practice now.",
      rating: 5
    },
    {
      name: "Linda Rodriguez",
      age: 72,
      text: "My balance has improved dramatically, and I feel more confident in my daily activities. Thank you, Stephen!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Never Leave the Playground
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Transform your life through Stephen Jepson's revolutionary approach to active aging and brain health. 
              Discover the power of playful movement to unlock your potential at any age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                  Start Your Journey - $9.99
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Never Leave the Playground?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the science-backed benefits of Stephen's unique approach to health and wellness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center items-center mb-4 space-x-3">
                    {feature.icon}
                    {feature.sportIcon && (
                      <img 
                        src={feature.sportIcon} 
                        alt={feature.sportAlt}
                        className="h-8 w-8 opacity-80 hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Content Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Content Preview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get exclusive access to Stephen's transformative video content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">
                  Never Leave The Playground Active Play Video
                </CardTitle>
                <CardDescription>
                  Brain Training Games for Enhanced Focus & Metabolism
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Master simple yet powerful games that boost attention span, improve metabolism, and enhance brain function. These accessible activities integrate seamlessly into your daily routine, providing practical tools for mental sharpness and healthier living. Proven effective by thousands over the years.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">45 minutes</span>
                  {isSubscribed ? (
                    <Link to="/videos">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <Play className="mr-1 h-4 w-4" />
                        Watch Now
                      </Button>
                    </Link>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      Premium Content
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  The 5 In One Juggling Uni-cycling Tight Rope Knife Throwing Video
                </CardTitle>
                <CardDescription>
                  Master 5 Extraordinary Movement Skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn five unique and challenging skills in one comprehensive video: juggling, unicycling, tightrope walking, knife throwing, and frisbee games. Perfect for ages 15-35, this engaging program builds balance, coordination, and confidence through fun, motivating activities that keep you coming back for more.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">58 minutes</span>
                  {isSubscribed ? (
                    <Link to="/videos">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Play className="mr-1 h-4 w-4" />
                        Watch Now
                      </Button>
                    </Link>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      Premium Content
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-dashed border-2 border-gray-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-500">
                  Coming Soon
                </CardTitle>
                <CardDescription>
                  More Exciting Content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">
                  We're working on additional premium content to enhance your Never Leave the Playground experience. Stay tuned for more transformative videos and resources!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">TBA</span>
                  <Button size="sm" variant="outline" disabled className="text-gray-400">
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people who have transformed their lives through Stephen's program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">Age {testimonial.age}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of people who have discovered the power of playful movement. 
            Start your journey today with our limited-time offer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-purple-100">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Scientifically</div>
              <div className="text-purple-100">Proven</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Instant</div>
              <div className="text-purple-100">Access</div>
            </div>
          </div>
          
          <Link to="/pricing">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Get Lifetime Access - $9.99
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage

