import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Menu, X, User, LogOut, MapPin } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isSubscribed, logout } = useAuth()
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about-me' },
    { name: 'Videos', href: '/videos' },
    { name: 'Resources', href: '/resources' },
    { name: 'Find Playground', href: '/playground-finder', special: true, icon: MapPin },
    { name: 'Events', href: '/events' },
    { name: 'Health Revolution', href: '/a-health-revolution' },
    { name: 'Pricing', href: '/pricing' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand - Left Side */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Never Leave the Playground Logo" 
              className="h-10 w-auto"
            />
            <div className="text-xl font-bold">Never Leave the Playground</div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  item.special 
                    ? isActive(item.href)
                      ? 'bg-yellow-400 text-purple-900 shadow-lg transform scale-105'
                      : 'bg-yellow-400/90 text-purple-900 hover:bg-yellow-400 hover:shadow-lg hover:transform hover:scale-105'
                    : isActive(item.href)
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.name}
                {item.special && <span className="text-xs">🎯</span>}
              </Link>
            ))}
          </div>

          {/* User Menu - Right Side */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  {isSubscribed && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Premium
                    </span>
                  )}
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <Button
                    onClick={logout}
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-purple-600"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/pricing">
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                      Subscribe $9.99
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-600 font-semibold transition-all duration-200"
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-700/50 backdrop-blur-sm">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2 ${
                    item.special 
                      ? isActive(item.href)
                        ? 'bg-yellow-400 text-purple-900'
                        : 'bg-yellow-400/90 text-purple-900 hover:bg-yellow-400'
                      : isActive(item.href)
                      ? 'bg-white/20 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.name}
                  {item.special && <span className="text-xs">🎯</span>}
                </Link>
              ))}
              
              {/* Mobile User Menu */}
              <div className="border-t border-white/20 pt-4 mt-4">
                {user ? (
                  <div className="space-y-2">
                    {isSubscribed && (
                      <span className="inline-block bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Premium
                      </span>
                    )}
                    <div className="flex items-center space-x-2 px-3 py-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    <Button
                      onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}
                      variant="outline"
                      size="sm"
                      className="w-full border-white text-white hover:bg-white hover:text-purple-600"
                    >
                      <LogOut className="h-4 w-4 mr-1" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link to="/pricing" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                        Subscribe $9.99
                      </Button>
                    </Link>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-600 font-semibold"
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

