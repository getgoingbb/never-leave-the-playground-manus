import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, Lock, FileText, BookOpen, Video, Users, Star, Clock } from 'lucide-react'

const ResourcesPage = () => {
  const { user, isSubscribed } = useAuth()

  const premiumResources = [
    {
      id: 1,
      title: "Complete Playground Training Manual",
      description: "Comprehensive 50-page guide covering all aspects of Stephen's playground methodology, including exercise progressions, safety guidelines, and cognitive training protocols.",
      type: "PDF Guide",
      pages: 50,
      downloadSize: "12 MB",
      premium: true,
      category: "Training Manual",
      rating: 4.9,
      downloads: "2.1k"
    },
    {
      id: 2,
      title: "Balance & Coordination Workbook",
      description: "Step-by-step exercises and assessments to improve balance, coordination, and spatial awareness. Includes progress tracking sheets and difficulty progressions.",
      type: "PDF Workbook",
      pages: 32,
      downloadSize: "8 MB",
      premium: true,
      category: "Exercise Guide",
      rating: 4.8,
      downloads: "1.8k"
    },
    {
      id: 3,
      title: "Neuroplasticity & Movement Science",
      description: "In-depth exploration of the scientific principles behind Stephen's methods. Perfect for healthcare professionals and serious practitioners.",
      type: "PDF Research",
      pages: 28,
      downloadSize: "6 MB",
      premium: true,
      category: "Science",
      rating: 4.9,
      downloads: "1.2k"
    },
    {
      id: 4,
      title: "Equipment Selection Guide",
      description: "Detailed guide for choosing the right playground equipment for adult training, including safety considerations and modification techniques.",
      type: "PDF Guide",
      pages: 20,
      downloadSize: "5 MB",
      premium: true,
      category: "Equipment",
      rating: 4.7,
      downloads: "1.5k"
    },
    {
      id: 5,
      title: "Cognitive Training Protocols",
      description: "Specific protocols for using movement to enhance cognitive function, memory, and executive function. Includes assessment tools.",
      type: "PDF Protocol",
      pages: 24,
      downloadSize: "4 MB",
      premium: true,
      category: "Cognitive Health",
      rating: 4.8,
      downloads: "1.3k"
    },
    {
      id: 6,
      title: "Injury Prevention & Recovery",
      description: "Essential guide for safe practice, injury prevention, and recovery protocols specifically designed for adult playground training.",
      type: "PDF Guide",
      pages: 18,
      downloadSize: "3 MB",
      premium: true,
      category: "Safety",
      rating: 4.6,
      downloads: "1.1k"
    }
  ]

  const freeResources = [
    {
      id: 7,
      title: "Getting Started with Playground Fitness",
      description: "Introduction to Stephen's philosophy and basic exercises you can start today.",
      type: "PDF Guide",
      pages: 12,
      downloadSize: "2 MB",
      premium: false,
      category: "Introduction",
      rating: 4.5,
      downloads: "8.2k"
    },
    {
      id: 8,
      title: "5-Minute Daily Balance Routine",
      description: "Quick daily routine to improve balance and coordination at home.",
      type: "PDF Routine",
      pages: 6,
      downloadSize: "1 MB",
      premium: false,
      category: "Quick Start",
      rating: 4.4,
      downloads: "12.5k"
    }
  ]

  const ResourceCard = ({ resource, canDownload }) => {
    const handleDownload = () => {
      if (canDownload) {
        // Map resource IDs to actual PDF files
        const pdfMap = {
          1: '/pdfs/complete-training-manual.pdf',
          2: '/pdfs/balance-coordination-workbook.pdf',
          3: '/pdfs/neuroplasticity-movement-science.pdf',
          4: '/pdfs/equipment-selection-guide.pdf',
          5: '/pdfs/cognitive-training-protocols.pdf',
          6: '/pdfs/injury-prevention-recovery.pdf',
          7: '/pdfs/getting-started-guide.pdf',
          8: '/pdfs/daily-balance-routine.pdf'
        }
        
        const pdfUrl = pdfMap[resource.id]
        if (pdfUrl) {
          // Create download link
          const link = document.createElement('a')
          link.href = pdfUrl
          link.download = `${resource.title.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`
          link.target = '_blank'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          alert('PDF file not found. Please contact support.')
        }
      }
    }

    return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-1">{resource.title}</CardTitle>
            <CardDescription className="text-purple-600 font-medium">
              {resource.type}
            </CardDescription>
          </div>
          <div className="flex flex-col items-end space-y-1">
            {resource.premium && (
              <Badge className="bg-purple-600">Premium</Badge>
            )}
            <Badge variant="outline" className="text-xs">
              {resource.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4 text-sm">
          {resource.description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FileText className="h-4 w-4 mr-1" />
            <span>{resource.pages} pages</span>
          </div>
          <div className="flex items-center">
            <Download className="h-4 w-4 mr-1" />
            <span>{resource.downloadSize}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{resource.rating}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{resource.downloads}</span>
          </div>
        </div>
        
        {canDownload ? (
          <Button onClick={handleDownload} className="w-full bg-green-600 hover:bg-green-700">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        ) : resource.premium ? (
          <Link to="/pricing">
            <Button variant="outline" className="w-full">
              <Lock className="mr-2 h-4 w-4" />
              Subscribe to Download
            </Button>
          </Link>
        ) : (
          <Button onClick={handleDownload} className="w-full bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Download Free
          </Button>
        )}
      </CardContent>
    </Card>
    )
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resource Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, workbooks, and research materials to support your 
            Never Leave the Playground journey.
          </p>
          
          {!isSubscribed && (
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-2">Unlock All Premium Resources</h3>
              <p className="mb-4">Get lifetime access to all guides and materials for just $9.99 (limited time)</p>
              <Link to="/pricing">
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  Subscribe Now - Save 80%
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Premium Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Premium Resources</h2>
            {isSubscribed && (
              <Badge className="bg-green-500 text-white px-3 py-1">
                ✓ You have access
              </Badge>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumResources.map((resource) => (
              <ResourceCard 
                key={resource.id} 
                resource={resource} 
                canDownload={isSubscribed}
              />
            ))}
          </div>
        </section>

        {/* Free Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
            <Badge variant="outline" className="px-3 py-1">
              Available to Everyone
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {freeResources.map((resource) => (
              <ResourceCard 
                key={resource.id} 
                resource={resource} 
                canDownload={true}
              />
            ))}
          </div>
        </section>

        {/* Resource Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Resource Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Training Manuals</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive guides covering all aspects of playground training
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Exercise Guides</h3>
                <p className="text-gray-600 text-sm">
                  Step-by-step exercise instructions and progressions
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Video className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Scientific Research</h3>
                <p className="text-gray-600 text-sm">
                  Evidence-based research supporting the methodology
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Safety Protocols</h3>
                <p className="text-gray-600 text-sm">
                  Essential safety guidelines and injury prevention
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Use Resources */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900 text-center">
                How to Use These Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-800">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Start with Basics</h4>
                  <p className="text-sm">
                    Begin with the free introduction guide to understand the fundamentals
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Follow Progressions</h4>
                  <p className="text-sm">
                    Use the training manual to follow proper exercise progressions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Track Progress</h4>
                  <p className="text-sm">
                    Use workbooks to monitor your improvement and adjust training
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        {!isSubscribed && (
          <section className="text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Access All Resources?
                </h3>
                <p className="mb-6">
                  Get instant access to all premium guides, workbooks, and research materials. 
                  Everything you need to master Stephen's playground methodology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/pricing">
                    <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                      Get Lifetime Access - $9.99
                    </Button>
                  </Link>
                  <Link to="/videos">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                      Watch Training Videos
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Subscriber Benefits */}
        {isSubscribed && (
          <section className="text-center">
            <Card className="bg-green-50 border-green-200 max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  Welcome, Premium Member!
                </h3>
                <p className="text-green-800 mb-6">
                  You have unlimited access to all resources. Download any PDF and keep them forever. 
                  New resources are added regularly at no additional cost.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/videos">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      <Video className="mr-2 h-5 w-5" />
                      Watch Premium Videos
                    </Button>
                  </Link>
                  <Link to="/playground-finder">
                    <Button size="lg" variant="outline">
                      Find Local Playgrounds
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  )
}

export default ResourcesPage

