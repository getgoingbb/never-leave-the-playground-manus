import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/layout/Layout'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import HealthRevolutionPage from './components/pages/HealthRevolutionPage'
import VideosPage from './components/pages/VideosPage'
import ResourcesPage from './components/pages/ResourcesPage'
import PlaygroundFinderPage from './components/pages/PlaygroundFinderPage'
import EventsPage from './components/pages/EventsPage'
import PricingPage from './components/pages/PricingPage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import NotFoundPage from './components/pages/NotFoundPage'
import AdminLoginPage from './components/pages/AdminLoginPage'
import AdminDashboard from './components/pages/AdminDashboard'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Main Site Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="about-me" element={<AboutPage />} />
            <Route path="a-health-revolution" element={<HealthRevolutionPage />} />
            <Route path="videos" element={<VideosPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="playground-finder" element={<PlaygroundFinderPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

