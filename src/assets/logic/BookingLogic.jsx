import { createContext, useContext, useState } from 'react'

const BookingLogic = createContext()

export const BookingProvider = ({ children }) => {
  const [bookedEvents, setBookedEvents] = useState([])

  const bookEvent = (event) => {
    if (!bookedEvents.some(e => e.id === event.id)) {
      setBookedEvents([...bookedEvents, event])
    }
  }

  const cancelBooking = (eventId) => {
    const updated = bookedEvents.filter(e => e.id !== eventId)
    setBookedEvents(updated)
  }

  return (
    <BookingLogic.Provider value={{ bookedEvents, bookEvent, cancelBooking }}>
      {children}
    </BookingLogic.Provider>
  )
}

export const useBooking = () => useContext(BookingLogic)
