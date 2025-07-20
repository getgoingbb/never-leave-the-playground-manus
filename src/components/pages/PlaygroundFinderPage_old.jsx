import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { MapPin, Clock, Phone, Star, Navigation, ExternalLink, Search, Loader2 } from 'lucide-react'

const PlaygroundFinderPage = () => {
  const { isSubscribed } = useAuth()
  const [location, setLocation] = useState('')
  const [radius, setRadius] = useState('10')
  const [playgrounds, setPlaygrounds] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [error, setError] = useState('')

  // Location-based playground data
  const getPlaygroundsForLocation = (searchLocation) => {
    const locationLower = searchLocation.toLowerCase()
    
    // Cocoa Beach / Cape Canaveral area (32927, 32931, 32920)
    if (locationLower.includes('32927') || locationLower.includes('32931') || locationLower.includes('32920') || 
        locationLower.includes('cocoa beach') || locationLower.includes('cape canaveral') || locationLower.includes('merritt island') ||
        locationLower.includes('port st john') || locationLower.includes('sharpes')) {
      return [
        {
          id: 1,
          name: "Bernice G. Jackson Park",
          address: "4201 N Cocoa Blvd (US Hwy 1), Sharpes, FL 32927",
          rating: 4.5,
          distance: "0.8 miles",
          phone: "(321) 433-4448",
          hours: "Dawn to Dusk",
          equipment: ["Playground Equipment", "Walking Trail", "Basketball Court", "Picnic Areas", "Community Center"],
          adultFriendly: true,
          accessibility: "Wheelchair Accessible"
        },
        {
          id: 2,
          name: "Fay Lake Wilderness Park",
          address: "6300 Fay Boulevard, Port St. John, FL 32927",
          rating: 4.6,
          distance: "3.2 miles",
          phone: "(321) 264-5105",
          hours: "Dawn to Dusk",
          equipment: ["Nature Trails", "Playground", "Pavilions", "Fishing Areas", "Dog Park"],
          adultFriendly: true,
          accessibility: "Partially Accessible"
        },
        {
          id: 3,
          name: "Nicol Park",
          address: "6660 N Cocoa Blvd, Port St John, FL 32927",
          rating: 4.3,
          distance: "2.5 miles",
          phone: "(321) 633-1904",
          hours: "Dawn to Dusk",
          equipment: ["Playground Equipment", "Pavilion/Shelter", "Benches", "Shoreline Fishing"],
          adultFriendly: true,
          accessibility: "Check with local facility"
        },
        {
          id: 4,
          name: "Cocoa West Recreation Complex",
          address: "230 South Burnett Road, Cocoa, FL 32926",
          rating: 4.7,
          distance: "5.1 miles",
          phone: "(321) 633-1987",
          hours: "Dawn to Dusk",
          equipment: ["Playground", "Tennis Courts", "Basketball", "Volleyball", "Multi-purpose Field", "Community Center"],
          adultFriendly: true,
          accessibility: "Fully Accessible"
        },
        {
          id: 5,
          name: "Friendship Park",
          address: "1055 Barclay Dr, Port St John, FL 32927",
          rating: 4.2,
          distance: "4.0 miles",
          phone: "(321) 264-5105",
          hours: "Dawn to Dusk",
          equipment: ["Playground Equipment", "Park Bench", "Open Space"],
          adultFriendly: true,
          accessibility: "Basic Access"
        }
      ]
    }
    
    // Orlando, FL playgrounds
    if (locationLower.includes('orlando') || locationLower.includes('32801') || locationLower.includes('32803') || locationLower.includes('32804')) {
      return [
        {
          id: 4,
          name: "Lake Eola Park Playground",
          address: "512 E Washington St, Orlando, FL 32801",
          rating: 4.6,
          distance: "1.2 miles",
          phone: "(407) 246-4484",
          hours: "6:00 AM - 10:00 PM",
          equipment: ["Monkey Bars", "Balance Beams", "Climbing Structure", "Fitness Equipment"],
          adultFriendly: true,
          accessibility: "Wheelchair Accessible"
        },
        {
          id: 5,
          name: "Bill Frederick Park at Turkey Lake",
          address: "3401 S Hiawassee Rd, Orlando, FL 32835",
          rating: 4.8,
          distance: "8.5 miles",
          phone: "(407) 246-4486",
          hours: "8:00 AM - 6:00 PM",
          equipment: ["Obstacle Course", "Rope Climbing", "Balance Course", "Parallel Bars"],
          adultFriendly: true,
          accessibility: "Partially Accessible"
        },
        {
          id: 6,
          name: "Wadeview Park",
          address: "5005 Wadeview Loop, Orlando, FL 32839",
          rating: 4.5,
          distance: "12.3 miles",
          phone: "(407) 246-4485",
          hours: "Dawn to Dusk",
          equipment: ["Climbing Wall", "Fitness Stations", "Balance Beams", "Monkey Bars"],
          adultFriendly: true,
          accessibility: "Fully Accessible"
        }
      ]
    }
    
    // Miami, FL playgrounds
    if (locationLower.includes('miami') || locationLower.includes('33101') || locationLower.includes('33131')) {
      return [
        {
          id: 7,
          name: "Bayfront Park Fitness Trail",
          address: "301 Biscayne Blvd, Miami, FL 33132",
          rating: 4.7,
          distance: "0.8 miles",
          phone: "(305) 358-7550",
          hours: "6:00 AM - 11:00 PM",
          equipment: ["Outdoor Gym", "Pull-up Bars", "Balance Beams", "Parallel Bars"],
          adultFriendly: true,
          accessibility: "Wheelchair Accessible"
        },
        {
          id: 8,
          name: "Virginia Key Beach Park",
          address: "4020 Virginia Beach Dr, Miami, FL 33149",
          rating: 4.4,
          distance: "6.2 miles",
          phone: "(305) 960-4600",
          hours: "8:00 AM - Sunset",
          equipment: ["Beach Workout Area", "Monkey Bars", "Climbing Structure", "Fitness Stations"],
          adultFriendly: true,
          accessibility: "Partially Accessible"
        }
      ]
    }
    
    // Tampa, FL playgrounds
    if (locationLower.includes('tampa') || locationLower.includes('33601') || locationLower.includes('33602')) {
      return [
        {
          id: 9,
          name: "Curtis Hixon Waterfront Park",
          address: "600 N Ashley Dr, Tampa, FL 33602",
          rating: 4.6,
          distance: "1.5 miles",
          phone: "(813) 274-8615",
          hours: "6:00 AM - 11:00 PM",
          equipment: ["Modern Playground", "Fitness Equipment", "Balance Features", "Climbing Elements"],
          adultFriendly: true,
          accessibility: "Fully Accessible"
        },
        {
          id: 10,
          name: "Al Lopez Park",
          address: "4810 N Himes Ave, Tampa, FL 33614",
          rating: 4.5,
          distance: "7.8 miles",
          phone: "(813) 274-8615",
          hours: "Dawn to Dusk",
          equipment: ["Fitness Trail", "Monkey Bars", "Balance Course", "Exercise Stations"],
          adultFriendly: true,
          accessibility: "Wheelchair Accessible"
        }
      ]
    }
    
    // Portland, OR playgrounds
    if (locationLower.includes('portland') || locationLower.includes('97201') || locationLower.includes('oregon')) {
      return [
        {
          id: 11,
          name: "Tom McCall Waterfront Park",
          address: "98 SW Naito Pkwy, Portland, OR 97204",
          rating: 4.5,
          distance: "2.1 miles",
          phone: "(503) 823-7529",
          hours: "5:00 AM - Midnight",
          equipment: ["Fitness Stations", "Balance Beams", "Pull-up Bars", "Outdoor Gym"],
          adultFriendly: true,
          accessibility: "Wheelchair Accessible"
        },
        {
          id: 12,
          name: "Laurelhurst Park",
          address: "SE 39th Ave & Stark St, Portland, OR 97214",
          rating: 4.7,
          distance: "4.3 miles",
          phone: "(503) 823-7529",
          hours: "5:00 AM - Midnight",
          equipment: ["Adventure Playground", "Climbing Structure", "Balance Course", "Fitness Equipment"],
          adultFriendly: true,
          accessibility: "Partially Accessible"
        }
      ]
    }
    
    // For locations without specific data, return empty array - no placeholder content
    return []
  }

  const handleSearch = async () => {
    if (!location.trim()) {
      setError('Please enter a location')
      return
    }

    setIsLoading(true)
    setError('')
    setHasSearched(true)

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Get location-based results
      const locationResults = getPlaygroundsForLocation(location)
      
      if (isSubscribed) {
        // Premium users get all results
        setPlaygrounds(locationResults)
      } else {
        // Free users get limited results with upgrade prompt
        setPlaygrounds(locationResults.slice(0, 1))
      }
    } catch (err) {
      setError('Failed to search for playgrounds. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGetDirections = (address) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank')
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🏞️ Find Your Playground
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover adult-friendly playgrounds and fitness equipment near you. Perfect for practicing Stephen's Never Leave the Playground philosophy.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-12 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <Search className="h-6 w-6 text-purple-600" />
              Search for Playgrounds
            </h2>
            <p className="text-gray-600 mt-2">
              Find playgrounds with equipment suitable for adult fitness and brain training
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                id="location"
                type="text"
                placeholder="Enter city, zip code, or address (e.g., Orlando, FL)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="radius" className="block text-sm font-medium text-gray-700 mb-2">
                Search Radius
              </label>
              <select
                id="radius"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
                <option value="25">25 miles</option>
                <option value="50">50 miles</option>
              </select>
            </div>
            
            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">{error}</div>
            )}
            
            <button 
              onClick={handleSearch} 
              disabled={isLoading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  Find Playgrounds
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {hasSearched && !isLoading && (
          <div className="space-y-8">
            {playgrounds.length > 0 ? (
              <>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Found {playgrounds.length} Playground{playgrounds.length !== 1 ? 's' : ''} near "{location}"
                  </h2>
                  {!isSubscribed && (
                    <p className="text-gray-600">
                      Showing limited results. <Link to="/pricing" className="text-purple-600 hover:underline font-semibold">Subscribe</Link> for comprehensive listings.
                    </p>
                  )}
                </div>
                
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                  {playgrounds.map((playground) => (
                    <div key={playground.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            {playground.name}
                            {playground.adultFriendly && (
                              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                Adult-Friendly
                              </span>
                            )}
                          </h3>
                          <p className="text-gray-600 flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {playground.address}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="font-semibold">{playground.rating}</span>
                          </div>
                          <div className="text-sm text-gray-500">{playground.distance}</div>
                        </div>
                      </div>
                      
                      {/* Equipment & Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-900">Equipment & Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {playground.equipment.map((item, index) => (
                            <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs font-medium">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Contact Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{playground.hours}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{playground.phone}</span>
                        </div>
                      </div>
                      
                      {/* Accessibility */}
                      <div className="mb-4">
                        <span className="text-sm font-medium">Accessibility: </span>
                        <span className="text-sm text-gray-600">{playground.accessibility}</span>
                      </div>
                      
                      {/* Action Button */}
                      <button 
                        onClick={() => handleGetDirections(playground.address)}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
                      >
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </button>
                    </div>
                  ))}
                </div>
                
                {!isSubscribed && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">🔓 Unlock More Playground Results</h3>
                    <p className="mb-6">
                      Premium members get access to comprehensive playground listings with detailed equipment information, adult-friendly ratings, and exclusive features.
                    </p>
                    <Link 
                      to="/pricing"
                      className="inline-block bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors"
                    >
                      Upgrade to Premium - $9.99
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  No playgrounds found near "{location}"
                </h2>
                <p className="text-gray-600 mb-6">
                  Try searching with a different location or expanding your search radius.
                </p>
                <button 
                  onClick={() => setLocation('')} 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  Try Another Search
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🎯 Tips for Adult Playground Use
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Equipment for Adults:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monkey bars for upper body strength</li>
                <li>• Balance beams for stability training</li>
                <li>• Climbing structures for coordination</li>
                <li>• Parallel bars for functional movement</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety Considerations:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Check weight limits on equipment</li>
                <li>• Start slowly and progress gradually</li>
                <li>• Use during less crowded times</li>
                <li>• Bring a spotter for challenging moves</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Ready to Start Your Playground Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn Stephen's proven techniques for using playground equipment to improve your balance, coordination, and cognitive function.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/pricing"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Watch Training Videos - $9.99
            </Link>
            <Link 
              to="/about"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Learn More About Stephen
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaygroundFinderPage

