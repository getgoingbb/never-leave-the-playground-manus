import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home, Search, ArrowLeft, Gamepad2 } from 'lucide-react'

const NotFoundPage = () => {
  const popularPages = [
    { name: 'Home', path: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'Videos', path: '/videos', icon: <Gamepad2 className="h-4 w-4" /> },
    { name: 'Pricing', path: '/pricing', icon: <Search className="h-4 w-4" /> },
    { name: 'About Stephen', path: '/about', icon: <Search className="h-4 w-4" /> },
    { name: 'Find Playground', path: '/playground-finder', icon: <Search className="h-4 w-4" /> },
    { name: 'Events', path: '/events', icon: <Search className="h-4 w-4" /> }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Illustration */}
        <div className="relative">
          <div className="text-9xl font-bold text-purple-200 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Gamepad2 className="h-24 w-24 text-purple-600" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mx-auto">
            Looks like you've wandered off the playground! The page you're looking for doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="px-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Link to="/">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-6">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Popular Pages */}
        <Card className="max-w-lg mx-auto">
          <CardContent className="pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Pages
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  {page.icon}
                  <span className="text-sm font-medium text-gray-700">
                    {page.name}
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="bg-blue-50 border-blue-200 max-w-lg mx-auto">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Need Help?
            </h3>
            <p className="text-blue-800 text-sm mb-4">
              If you think this is an error or you're looking for something specific, 
              we're here to help!
            </p>
            <div className="space-y-2 text-sm text-blue-800">
              <p>📧 Email: info@neverleavetheplayground.com</p>
              <p>📞 Phone: (555) 123-4567</p>
            </div>
          </CardContent>
        </Card>

        {/* Subscription CTA */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white max-w-lg mx-auto">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-2">
              While You're Here...
            </h3>
            <p className="text-sm mb-4 opacity-90">
              Don't miss out on Stephen's transformative content! 
              Get lifetime access for just $9.99 (limited time).
            </p>
            <Link to="/pricing">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                View Pricing
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Fun Message */}
        <div className="text-center">
          <p className="text-gray-500 text-sm italic">
            "Even when you're lost, remember to never leave the playground!" - Stephen Jepson
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

