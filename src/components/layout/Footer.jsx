import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section with Logo */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Never Leave the Playground Logo" 
                className="h-12 w-auto"
              />
              <h3 className="text-xl font-bold text-purple-400">Never Leave the Playground</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Stephen Jepson is a pioneer in active aging and brain health, dedicated to helping people 
              maintain their physical and cognitive abilities through playful movement. His revolutionary 
              "Never Leave the Playground" philosophy has transformed thousands of lives worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/stephen.jepson.7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/stephenjepson/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.youtube.com/user/stephenjepson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-300 hover:text-white transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/playground-finder" className="text-gray-300 hover:text-white transition-colors">
                  Find Playground
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              {/* Hidden Admin Link - Same color as background */}
              <li>
                <Link to="/admin/login" className="text-gray-900 hover:text-gray-800 transition-colors text-xs">
                  •
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>stephen@neverleavetheplayground.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>407-349-5587</span>
              </div>
            </div>
            
            {/* Newsletter/Speaking Engagements */}
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2 text-blue-400">Newsletter & Speaking</h4>
              <p className="text-gray-400 text-sm mb-3">
                Sign up for our newsletter and check availability for speaking engagements.
              </p>
              <a 
                href="https://never-leave-the-playground.mailchimpsites.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Newsletter & Speaking Info
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/logo.png" 
              alt="Never Leave the Playground Logo" 
              className="h-8 w-auto"
            />
            <p className="text-gray-400 text-sm">
              © 2025 Never Leave the Playground. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

