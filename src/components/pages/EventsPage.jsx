import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users, Clock, Star, Mail, Phone, Building } from 'lucide-react'

const EventsPage = () => {
  const [bookingForm, setBookingForm] = useState({
    eventType: '',
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    eventDate: '',
    location: '',
    expectedAttendees: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const upcomingEvents = [
    {
      id: 1,
      title: "International Design Workshop",
      date: "Featured Event",
      time: "Multi-day intensive",
      location: "Kolding Design School, Denmark",
      type: "Workshop",
      attendees: "International participants",
      price: "By invitation",
      description: "Stephen served as guest teacher and 'Play Inspirator' at the prestigious 20th International Design Camp, receiving two standing ovations for his motor skill training methods."
    },
    {
      id: 2,
      title: "Movement & Wellness Keynote",
      date: "International Event",
      time: "Keynote presentation",
      location: "Phuket, Thailand",
      type: "Keynote",
      attendees: "Global movement community",
      price: "Conference registration",
      description: "Keynote speaker at the renowned Ido Portal Movement Camp, sharing playground philosophy with international movement practitioners in a beautiful tropical setting."
    },
    {
      id: 3,
      title: "Fitness Business Summit",
      date: "Industry Conference",
      time: "Featured speaker",
      location: "Costa Mesa, California",
      type: "Business",
      attendees: "Fitness professionals",
      price: "Industry event",
      description: "Featured speaker at the Fitness Business Summit, helping fitness professionals integrate playground-based training into their business models and client programs."
    }
  ]

  const eventTypes = [
    { value: 'keynote', label: 'Keynote Speech' },
    { value: 'workshop', label: 'Workshop/Training' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'conference', label: 'Conference Presentation' },
    { value: 'community', label: 'Community Event' },
    { value: 'other', label: 'Other' }
  ]

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link with form data
      const subject = `Event Booking Request - ${bookingForm.eventType}`
      const body = `
Event Booking Request

Event Type: ${bookingForm.eventType}
Organization: ${bookingForm.organizationName}
Contact Name: ${bookingForm.contactName}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}
Event Date: ${bookingForm.eventDate}
Location: ${bookingForm.location}
Expected Attendees: ${bookingForm.expectedAttendees}
Budget: ${bookingForm.budget}

Message:
${bookingForm.message}
      `.trim()

      const mailtoLink = `mailto:stephen@neverleavetheplayground.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Show success message
      setTimeout(() => {
        setIsSubmitting(false)
        alert('Your email client should open with the booking request. Please send the email to complete your request.')
        setBookingForm({
          eventType: '',
          organizationName: '',
          contactName: '',
          email: '',
          phone: '',
          eventDate: '',
          location: '',
          expectedAttendees: '',
          budget: '',
          message: ''
        })
      }, 1000)
    } catch (error) {
      setIsSubmitting(false)
      alert('There was an issue opening your email client. Please contact stephen@neverleavetheplayground.com directly.')
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Stephen Jepson
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bring Stephen's transformative message to your organization, conference, or community. 
            Inspire your audience with the power of the playground philosophy.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Speaking & Workshops
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge className={`text-white mb-2 ${
                      event.type === 'Workshop' ? 'bg-green-600' :
                      event.type === 'Keynote' ? 'bg-blue-600' :
                      'bg-purple-600'
                    }`}>
                      {event.type}
                    </Badge>
                    <div className="text-right text-sm text-gray-500">
                      {event.price}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>
                  
                  <Button className={`w-full ${
                    event.type === 'Workshop' ? 'bg-green-600 hover:bg-green-700' :
                    event.type === 'Keynote' ? 'bg-blue-600 hover:bg-blue-700' :
                    'bg-purple-600 hover:bg-purple-700'
                  }`}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Booking Form */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Book Stephen for Your Event
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below to request Stephen for your event. We'll get back to you within 24 hours 
                to discuss availability, pricing, and event details.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Event Booking Request</CardTitle>
                <CardDescription className="text-center">
                  Please provide as much detail as possible about your event
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="eventType">Event Type *</Label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={bookingForm.eventType}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="organizationName">Organization Name *</Label>
                      <Input
                        id="organizationName"
                        name="organizationName"
                        value={bookingForm.organizationName}
                        onChange={handleInputChange}
                        placeholder="Your organization or company"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={bookingForm.contactName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={bookingForm.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={bookingForm.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="eventDate">Preferred Event Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={bookingForm.eventDate}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="location">Event Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={bookingForm.location}
                        onChange={handleInputChange}
                        placeholder="City, State or Full Address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="expectedAttendees">Expected Attendees</Label>
                      <Input
                        id="expectedAttendees"
                        name="expectedAttendees"
                        value={bookingForm.expectedAttendees}
                        onChange={handleInputChange}
                        placeholder="Approximate number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Input
                      id="budget"
                      name="budget"
                      value={bookingForm.budget}
                      onChange={handleInputChange}
                      placeholder="e.g., $5,000 - $10,000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={bookingForm.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your event, audience, goals, and any specific requirements..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 py-3 text-lg"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Send Booking Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Info */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              For immediate assistance or to discuss your event requirements, 
              feel free to contact us directly by filling out the form at the bottom of the page (Newsletter & Speaking Info)and you can call anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:stephen@neverleavetheplayground.com"
                className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Mail className="h-5 w-5" />
                stephen@neverleavetheplayground.com
              </a>
              <a 
                href="tel:407-349-5587"
                className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5" />
                407-349-5587
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EventsPage

