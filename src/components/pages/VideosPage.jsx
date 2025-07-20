import { useAuth } from '../../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play, Lock, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const VideosPage = () => {
  const { user, isSubscribed } = useAuth()

  const premiumVideos = [
    {
      id: 1,
      title: "Never Leave The Playground Active Play Video",
      description: "Master simple yet powerful games that boost attention span, improve metabolism, and enhance brain function. These accessible activities integrate seamlessly into your daily routine, providing practical tools for mental sharpness and healthier living.",
      duration: "45 minutes",
      thumbnail: "/brain-training-thumbnail.jpg",
      youtubeUrl: "https://youtu.be/5k3665Dwosg", // Full premium video
      previewUrl: "https://youtu.be/kxFTnQadcPw", // Free preview
      category: "Brain Training",
      isPremium: true
    },
    {
      id: 2,
      title: "The 5 In One Juggling Uni-cycling Tight Rope Knife Throwing Video",
      description: "Learn five unique and challenging skills in one comprehensive video: juggling, unicycling, tightrope walking, knife throwing, and frisbee games. Perfect for building balance, coordination, and confidence through fun, motivating activities.",
      duration: "58 minutes",
      thumbnail: "/juggling-thumbnail.jpg",
      youtubeUrl: "https://youtu.be/qbJAxhkriiY", // Full premium video
      previewUrl: "https://youtu.be/ll6aoSmWzKY", // Free preview
      category: "Skills Training",
      isPremium: true
    }
  ]

  const freeVideos = [
    {
      id: 3,
      title: "For Speaking Engagements Contact Stephen Jepson",
      description: "I speak on one subject that contributes to people's longer, healthier, and more productive life. Hire me to speak at your next organization's event.",
      duration: "3 minutes",
      thumbnail: "/playground-thumbnail.jpg",
      youtubeUrl: "https://youtu.be/m6KrVBWtE_0",
      category: "Speaking"
    },
    {
      id: 4,
      title: "News From Never Leave the Playground",
      description: "Training for Balance, Stability and Coordination. Age Proofing the Brain. Because my method is not arduous or boring, I focus on play and games, which begin with simple movements that progress to more complex challenges for the brain and body. Spirit Lake Interview Included.",
      duration: "5 minutes",
      thumbnail: "/balance-thumbnail.jpg",
      youtubeUrl: "https://youtu.be/qh0PlR27qJ0",
      category: "News"
    }
  ]

  const handleVideoClick = (video) => {
    if (video.isPremium) {
      if (isSubscribed) {
        // Subscribed users get access to full premium video
        window.open(video.youtubeUrl, '_blank')
      } else {
        // Non-subscribers get the free preview
        window.open(video.previewUrl, '_blank')
      }
    } else {
      // Free videos open directly
      window.open(video.youtubeUrl, '_blank')
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Video Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your life with Stephen Jepson's revolutionary movement training videos
          </p>
          {!isSubscribed && (
            <div className="mt-8">
              <Link to="/pricing">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  Get Full Access - $9.99 Limited Time
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Subscription Status */}
        {isSubscribed && (
          <div className="mb-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full">
              <Badge className="bg-green-600 text-white mr-2">Premium</Badge>
              You have access to all premium content!
            </div>
          </div>
        )}

        {/* Premium Videos Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Premium Training Videos</h2>
            <Badge className="bg-purple-600 text-white px-4 py-2">Premium Content</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {premiumVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button
                      onClick={() => handleVideoClick(video)}
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {isSubscribed ? 'Watch Full Video' : 'Watch Preview'}
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">
                      {isSubscribed ? 'Full Access' : 'Preview Available'}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black bg-opacity-70 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{video.title}</CardTitle>
                      <Badge variant="outline" className="mb-2">{video.category}</Badge>
                    </div>
                    {!isSubscribed && <Lock className="w-5 h-5 text-gray-400 ml-2" />}
                  </div>
                  <CardDescription className="text-sm">
                    {video.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleVideoClick(video)}
                      className="flex-1"
                      variant={isSubscribed ? "default" : "outline"}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {isSubscribed ? 'Watch Full Video' : 'Watch Preview'}
                    </Button>
                    {!isSubscribed && (
                      <Link to="/pricing">
                        <Button variant="default" className="bg-red-600 hover:bg-red-700">
                          Unlock Full Video
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Free Content Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Content</h2>
            <Badge className="bg-green-600 text-white px-4 py-2">Always Free</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {freeVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button
                      onClick={() => handleVideoClick(video)}
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Free
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">Free</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black bg-opacity-70 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg mb-2">{video.title}</CardTitle>
                  <Badge variant="outline" className="mb-2 w-fit">{video.category}</Badge>
                  <CardDescription className="text-sm">
                    {video.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Button
                    onClick={() => handleVideoClick(video)}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch Free on YouTube
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {!isSubscribed && (
          <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
            <p className="text-lg mb-6">
              Get unlimited access to all premium training videos and exclusive content
            </p>
            <Link to="/pricing">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
                Start Your Journey - $9.99 Limited Time
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideosPage

