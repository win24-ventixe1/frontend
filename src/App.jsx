import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Dashboard from './assets/pages/Dashboard'
import Events from './assets/pages/Events'
import Bookings from './assets/pages/Bookings'
import DeveloperModal from './assets/components/DeveloperModal'
import LoginModal from './assets/components/LoginModal'
import { useDeveloper } from './assets/logic/DeveloperLogic'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showDeveloperModal, setShowDeveloperModal] = useState(false)

  const { addEvent } = useDeveloper()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleOpenDeveloper = () => {
    if (isAuthenticated) {
      setShowDeveloperModal(true)
    } else {
      setShowLogin(true)
    }
  }

  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
    setShowLogin(false)
    setShowDeveloperModal(true)
  } // bf

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard openDeveloper={handleOpenDeveloper} />} />
        <Route path="/events" element={<Events />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>

      {showLogin && <LoginModal onLogin={handleLoginSuccess} />}

      {showDeveloperModal && (
        <DeveloperModal
          onClose={() => setShowDeveloperModal(false)}
          onAddEvent={addEvent}
        />
      )}
    </>
  )
}

export default App
