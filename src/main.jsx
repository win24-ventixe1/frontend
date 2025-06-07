import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BookingProvider } from './assets/logic/BookingLogic'
import { DeveloperProvider } from './assets/logic/DeveloperLogic'

import './css/variables.css'
import './css/typography.css'
import './css/body.css'
import './css/layout.css'
import './css/dashboard.css'
import './css/events.css'
import './css/bookings.css'
import './css/confirmations.css'
import './css/loginmodal.css'
import './css/developer.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DeveloperProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </DeveloperProvider>
    </BrowserRouter>
  </StrictMode>
)
