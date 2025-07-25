import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Brain, Heart, Users, Award, Target, Lightbulb, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Stephen Jepson
              </h1>
              <p className="text-xl mb-6 text-purple-100">
                The Visionary Behind Never Leave The Playground
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Discover the inspiring journey and philosophy of Stephen Jepson, a pioneer in playful longevity 
                who continues to defy expectations and transform lives through the power of play.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/pricing">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/videos">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Videos
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img 
                  src="/stephen-profile.jpg" 
                  alt="Stephen Jepson" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Man Behind the Movement
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Born on May 31, 1941, in Sioux City, Iowa, Stephen Jepson's journey to becoming a movement pioneer 
                  began in an unexpected place: the ceramics studio. For decades, he was known as a master ceramic 
                  artist whose work graced the Smithsonian Museum's Collection of American Crafts.
                </p>
                <p>
                  But Stephen's true calling emerged later in life when he realized that the same principles of 
                  creativity, precision, and continuous learning that made him a master craftsman could revolutionize 
                  how we approach aging and health. At an age when most people slow down, Stephen discovered the 
                  fountain of youth wasn't in a magical elixir—it was in never stopping the play.
                </p>
                <p>
                  "I noticed that children naturally engage in complex movements that challenge their brains and bodies 
                  simultaneously," Stephen reflects. "Adults abandon this approach, thinking exercise must be serious 
                  and strenuous. I wanted to prove them wrong."
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-700">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">Age</Badge>
                    <span>83 years young (born 1941)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">Location</Badge>
                    <span>Geneva, Florida</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">Background</Badge>
                    <span>Ceramic Artist & Educator</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">Mission</Badge>
                    <span>Transforming lives through play</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stephen's Journey Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stephen's Journey to Lifelong Vitality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A revolutionary approach to health and aging that began not in a gym, but in a lifelong pursuit of mastering complex movements and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Man Who Never Left the Playground</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Stephen Jepson is a celebrated health and longevity expert, best known for his revolutionary 
                "Never Leave The Playground" philosophy. His journey began not in a gym, but in a lifelong 
                pursuit of mastering complex movements and activities that keep both the body and mind sharp.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At an age when many are slowing down, Stephen continues to defy expectations, demonstrating 
                incredible agility, coordination, and cognitive function. He attributes his vibrant health to 
                a consistent, joyful engagement in playful activities rather than strenuous, conventional exercise routines.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-100 text-purple-800">Health Expert</Badge>
                <Badge className="bg-blue-100 text-blue-800">Longevity Pioneer</Badge>
                <Badge className="bg-green-100 text-green-800">Movement Specialist</Badge>
                <Badge className="bg-orange-100 text-orange-800">Keynote Speaker</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Neuroplasticity Expert</h4>
                  <p className="text-sm text-gray-600">Stimulating brain growth through playful movement</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Holistic Wellness</h4>
                  <p className="text-sm text-gray-600">Mind-body connection through joyful activities</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Global Impact</h4>
                  <p className="text-sm text-gray-600">Inspiring thousands worldwide</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Proven Results</h4>
                  <p className="text-sm text-gray-600">Decades of successful outcomes</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy in Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              His Philosophy in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three core principles that form the foundation of Stephen's revolutionary approach to health and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Lightbulb className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Play as Medicine</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Stephen advocates for integrating simple, fun games into daily life to stimulate neurogenesis—the 
                  growth of new brain cells—and enhance physical capabilities. Play becomes a powerful tool for healing and growth.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Holistic Well-being</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  His methods focus on improving memory, concentration, balance, and overall physical fitness, 
                  proving that mental and physical health are deeply interconnected and must be addressed together.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Inspiring Thousands</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Through his videos, workshops, and speaking engagements, Stephen empowers individuals worldwide 
                  to embrace play as their secret weapon against aging and a path to a more fulfilling life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Recognition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stephen's work has gained international recognition and transformed countless lives across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <div className="text-gray-600">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Speaking Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What People Are Saying</h3>
              <p className="text-gray-600">Real testimonials from people whose lives have been transformed</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The incredible Stephen Jepson, the man who never left the playground... No one that attended 
                  this lecture will ever be the same again. What an inspiration! What a role model!"
                </p>
                <div className="font-semibold text-gray-900">— Bedros Keuilian, Ido Portal</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "An incredibly unique, powerful, and motivating presentation. The Parkinson's Outreach Group 
                  greatly benefited from Stephen's insights and methods."
                </p>
                <div className="font-semibold text-gray-900">— Parkinson's Outreach Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section for SEO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Stephen in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch Stephen explains his revolutionary approach to health and movement. 
              These videos showcase the power of playful exercise and brain training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Video */}
            <div className="space-y-6">
              <Card className="overflow-hidden shadow-lg">
                <div className="aspect-video bg-gray-100 relative">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/bOP7AdJ0OXU"
                    title="Stephen Jepson - Never Leave the Playground Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Introduction to Never Leave the Playground</h3>
                  <p className="text-gray-600 mb-4">
                    Stephen explains his philosophy and demonstrates basic movements that anyone can start with. 
                    Perfect for beginners looking to understand the foundation of playful fitness.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>• Brain Training</span>
                    <span>• Balance Exercises</span>
                    <span>• Beginner Friendly</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Video Content Matters</h3>
              
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-purple-500">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Play className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Visual Learning</h4>
                      <p className="text-gray-600 text-sm">
                        See exactly how Stephen performs each movement, making it easier to understand 
                        and replicate the techniques safely and effectively.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Brain className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Inspiration & Motivation</h4>
                      <p className="text-gray-600 text-sm">
                        Watching Stephen at 83 years old perform complex movements is incredibly 
                        inspiring and proves that age is just a number.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-green-500">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Target className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Proper Technique</h4>
                      <p className="text-gray-600 text-sm">
                        Learn the correct form and progression for each exercise to maximize 
                        benefits while minimizing risk of injury.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🎯 SEO Benefits of Video Content</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Increases page dwell time (users stay longer)</li>
                  <li>• Rich media content favored by search engines</li>
                  <li>• Video thumbnails appear in search results</li>
                  <li>• Improves user engagement and social signals</li>
                  <li>• Supports video schema markup for better SEO</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands who have transformed their lives through Stephen's revolutionary approach to health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Lifetime Access - $9.99
              </Button>
            </Link>
            <Link to="/a-health-revolution">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Learn About the Revolution
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

