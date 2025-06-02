import { Routes, Route, Link } from 'react-router-dom'

import Dashboard from './assets/pages/Dashboard'
import Events from './assets/pages/Events'
import Bookings from './assets/pages/Bookings'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </>
  )
}

export default App
