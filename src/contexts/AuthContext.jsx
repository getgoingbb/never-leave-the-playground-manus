import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing user and subscription in localStorage
    const userData = localStorage.getItem('nltp_user')
    const subscriberData = localStorage.getItem('nltp_subscriber')
    
    if (userData) {
      try {
        const user = JSON.parse(userData)
        setUser(user)
      } catch (error) {
        console.error('Error parsing user data:', error)
        localStorage.removeItem('nltp_user')
      }
    }
    
    if (subscriberData) {
      try {
        const subscriber = JSON.parse(subscriberData)
        if (subscriber.subscribed && subscriber.paypalOrderId) {
          setIsSubscribed(true)
        }
      } catch (error) {
        console.error('Error parsing subscriber data:', error)
        localStorage.removeItem('nltp_subscriber')
      }
    }
    
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Real authentication would validate credentials against a backend
    // For now, we'll check for demo credentials or require real signup
    if (email === 'demo@neverleavetheplayground.com' && password === 'demo123') {
      const userData = {
        email,
        name: 'Demo User',
        subscribed: true, // Demo user should have subscription access
        isDemo: true,
        paypalOrderId: 'DEMO_ORDER_123',
        paypalPayerId: 'DEMO_PAYER_123'
      }
      setUser(userData)
      setIsSubscribed(true) // Set subscription status
      localStorage.setItem('nltp_user', JSON.stringify(userData))
      localStorage.setItem('nltp_subscriber', JSON.stringify(userData))
      return userData
    }
    
    // Check if user exists in localStorage (simulated database)
    const existingUsers = JSON.parse(localStorage.getItem('nltp_users') || '[]')
    const existingUser = existingUsers.find(u => u.email === email && u.password === password)
    
    if (existingUser) {
      const userData = {
        email: existingUser.email,
        name: existingUser.name,
        subscribed: false
      }
      setUser(userData)
      localStorage.setItem('nltp_user', JSON.stringify(userData))
      return userData
    }
    
    throw new Error('Invalid email or password')
  }

  const signup = async (email, password, name) => {
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('nltp_users') || '[]')
    const existingUser = existingUsers.find(u => u.email === email)
    
    if (existingUser) {
      throw new Error('User already exists with this email')
    }
    
    // Create new user
    const newUser = {
      email,
      password, // In real app, this would be hashed
      name,
      createdAt: new Date().toISOString()
    }
    
    existingUsers.push(newUser)
    localStorage.setItem('nltp_users', JSON.stringify(existingUsers))
    
    const userData = {
      email,
      name,
      subscribed: false
    }
    
    setUser(userData)
    localStorage.setItem('nltp_user', JSON.stringify(userData))
    return userData
  }

  const subscribe = async (subscriptionData) => {
    if (!user) {
      throw new Error('Must be logged in to subscribe')
    }
    
    // Validate that this is a real PayPal transaction
    if (!subscriptionData.paypalOrderId || !subscriptionData.paypalPayerId) {
      throw new Error('Valid PayPal payment required for subscription')
    }
    
    // In a real app, you would verify the PayPal transaction on your backend
    // and then activate the subscription
    
    const subscriberData = {
      ...user,
      ...subscriptionData,
      subscribed: true,
      subscribedAt: new Date().toISOString(),
      paymentMethod: 'paypal'
    }
    
    setIsSubscribed(true)
    setUser(subscriberData)
    localStorage.setItem('nltp_subscriber', JSON.stringify(subscriberData))
    localStorage.setItem('nltp_user', JSON.stringify(subscriberData))
    
    return subscriberData
  }

  const logout = () => {
    setUser(null)
    setIsSubscribed(false)
    localStorage.removeItem('nltp_user')
    localStorage.removeItem('nltp_subscriber')
  }

  const value = {
    user,
    isSubscribed,
    loading,
    login,
    signup,
    subscribe,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

