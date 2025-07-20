import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, CreditCard } from 'lucide-react'

const SignupPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <Card>
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Account Creation</CardTitle>
            <CardDescription>
              Join Never Leave the Playground
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Subscription Required
              </h3>
              <p className="text-blue-800 text-sm mb-4">
                To access Never Leave the Playground content, you need to purchase a subscription. 
                Your account will be automatically created during the payment process.
              </p>
            </div>
            
            <div className="space-y-4">
              <Link to="/pricing">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Get Lifetime Access - $9.99
                </Button>
              </Link>
              
              <div className="text-sm text-gray-600">
                Limited time offer - Save 80%!
              </div>
              
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-2">
                  Already have an account?
                </p>
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-green-900 mb-2">
                What You Get:
              </h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Lifetime access to all premium videos</li>
                <li>• Exclusive PDF resources and guides</li>
                <li>• Playground finder tool</li>
                <li>• Event booking platform</li>
                <li>• Community support</li>
                <li>• Mobile-friendly access</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SignupPage

