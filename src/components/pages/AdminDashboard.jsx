import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  DollarSign, 
  Video, 
  TrendingUp, 
  Calendar,
  Mail,
  Phone,
  MapPin,
  LogOut,
  Download,
  Eye,
  Settings,
  BarChart3,
  UserCheck,
  CreditCard
} from 'lucide-react'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [adminData, setAdminData] = useState(null)
  const [subscribers, setSubscribers] = useState([])
  const [stats, setStats] = useState({
    totalSubscribers: 0,
    totalRevenue: 0,
    newSubscribersToday: 0,
    conversionRate: 0
  })

  useEffect(() => {
    // Check admin authentication
    const admin = localStorage.getItem('nltp_admin')
    if (!admin) {
      navigate('/admin/login')
      return
    }
    
    try {
      setAdminData(JSON.parse(admin))
    } catch (error) {
      navigate('/admin/login')
      return
    }

    // Load subscriber data
    loadSubscriberData()
  }, [navigate])

  const loadSubscriberData = () => {
    // Get all subscribers from localStorage (in real app, this would be from a database)
    const subscriberData = localStorage.getItem('nltp_subscriber')
    const allSubscribers = []
    
    if (subscriberData) {
      try {
        const subscriber = JSON.parse(subscriberData)
        if (subscriber.subscribed) {
          allSubscribers.push(subscriber)
        }
      } catch (error) {
        console.error('Error parsing subscriber data:', error)
      }
    }

    // Add some mock data for demonstration
    const mockSubscribers = [
      {
        email: 'sarah.johnson@email.com',
        name: 'Sarah Johnson',
        plan: 'lifetime',
        price: 9.99,
        subscribedAt: '2025-01-05T10:30:00Z',
        paypalOrderId: 'MOCK_ORDER_001',
        paymentMethod: 'paypal'
      },
      {
        email: 'michael.chen@email.com',
        name: 'Michael Chen',
        plan: 'regular',
        price: 49.99,
        subscribedAt: '2025-01-04T15:45:00Z',
        paypalOrderId: 'MOCK_ORDER_002',
        paymentMethod: 'paypal'
      },
      {
        email: 'linda.rodriguez@email.com',
        name: 'Linda Rodriguez',
        plan: 'lifetime',
        price: 9.99,
        subscribedAt: '2025-01-03T09:15:00Z',
        paypalOrderId: 'MOCK_ORDER_003',
        paymentMethod: 'paypal'
      }
    ]

    const allSubs = [...allSubscribers, ...mockSubscribers]
    setSubscribers(allSubs)

    // Calculate stats
    const totalRevenue = allSubs.reduce((sum, sub) => sum + sub.price, 0)
    const today = new Date().toDateString()
    const newToday = allSubs.filter(sub => 
      new Date(sub.subscribedAt).toDateString() === today
    ).length

    setStats({
      totalSubscribers: allSubs.length,
      totalRevenue: totalRevenue,
      newSubscribersToday: newToday,
      conversionRate: 12.5 // Mock conversion rate
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('nltp_admin')
    navigate('/')
  }

  const exportSubscribers = () => {
    const csvContent = [
      ['Name', 'Email', 'Plan', 'Price', 'Subscribed Date', 'PayPal Order ID'],
      ...subscribers.map(sub => [
        sub.name,
        sub.email,
        sub.plan,
        `$${sub.price}`,
        new Date(sub.subscribedAt).toLocaleDateString(),
        sub.paypalOrderId
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `nltp-subscribers-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (!adminData) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                NLTP Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {adminData.name}
              </span>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="flex items-center"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalSubscribers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">New Today</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.newSubscribersToday}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Export Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={exportSubscribers} className="w-full">
                Download Subscriber List
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                View Site
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => window.open('/', '_blank')}
                variant="outline" 
                className="w-full"
              >
                Open Main Website
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Site Configuration
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Subscribers Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Subscribers</CardTitle>
                <CardDescription>
                  Manage your subscriber base and view payment details
                </CardDescription>
              </div>
              <Badge variant="outline">
                {subscribers.length} Total
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-gray-600">Subscriber</th>
                    <th className="text-left p-4 font-medium text-gray-600">Plan</th>
                    <th className="text-left p-4 font-medium text-gray-600">Revenue</th>
                    <th className="text-left p-4 font-medium text-gray-600">Date</th>
                    <th className="text-left p-4 font-medium text-gray-600">Payment</th>
                    <th className="text-left p-4 font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((subscriber, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <div className="font-medium text-gray-900">{subscriber.name}</div>
                          <div className="text-sm text-gray-600 flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {subscriber.email}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge 
                          className={subscriber.plan === 'lifetime' ? 'bg-red-500' : 'bg-blue-500'}
                        >
                          {subscriber.plan === 'lifetime' ? 'Lifetime ($9.99)' : 'Regular ($49.99)'}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="font-medium text-green-600">
                          ${subscriber.price}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-600">
                          {new Date(subscriber.subscribedAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <CreditCard className="h-3 w-3 mr-1" />
                          PayPal
                        </div>
                        <div className="text-xs text-gray-500">
                          {subscriber.paypalOrderId}
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge className="bg-green-500">
                          <UserCheck className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lifetime Plans ($9.99)</span>
                  <span className="font-medium">
                    ${(subscribers.filter(s => s.plan === 'lifetime').length * 9.99).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Regular Plans ($49.99)</span>
                  <span className="font-medium">
                    ${(subscribers.filter(s => s.plan === 'regular').length * 49.99).toFixed(2)}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total Revenue</span>
                    <span className="text-green-600">${stats.totalRevenue.toFixed(2)}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Split 50/50 between:</p>
                  <p>• stephen@neverleavetheplayground.com</p>
                  <p>• paypal@globalnow.biz</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Order Value</span>
                  <span className="font-medium">
                    ${subscribers.length > 0 ? (stats.totalRevenue / subscribers.length).toFixed(2) : '0.00'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lifetime vs Regular</span>
                  <span className="font-medium">
                    {subscribers.filter(s => s.plan === 'lifetime').length} : {subscribers.filter(s => s.plan === 'regular').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className="font-medium text-green-600">{stats.conversionRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-medium">100% PayPal</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

