import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import EventCard from '../components/EventCard'
import { useBooking } from '../logic/BookingLogic'
import BookingConfirmation from '../components/confirmations/BookingConfirmation'
import { useDeveloper } from '../logic/DeveloperLogic'

const Events = ({ openDeveloper }) => {
  const [events, setEvents] = useState([])
  const { bookEvent, isEventBooked } = useBooking()
  const { customEvents } = useDeveloper()

  const [showConfirm, setShowConfirm] = useState(false)
  const [lastBooking, setLastBooking] = useState(null)

  useEffect(() => {
    fetch('https://localhost:7152/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err))
  }, [])

  const allEvents = [...events, ...customEvents]

  const handleBooking = (eventId, seats) => {
    const selectedEvent = allEvents.find(e => e.id === eventId)
    if (selectedEvent) {
      const bookingWithSeats = { ...selectedEvent, seats }
      bookEvent(bookingWithSeats)
      setLastBooking({ event: bookingWithSeats, seats })
      setShowConfirm(true)
    }
  }

  return (
    <Layout title="Events" active="Events" openDeveloper={openDeveloper}>
      <h2>Upcoming Events</h2>

      <div className="event-grid">
        {allEvents.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onBook={handleBooking}
            buttonLabel="Book Event"
            isBooked={isEventBooked(event.id)}
          />
        ))}
      </div>

      {showConfirm && lastBooking && (
        <BookingConfirmation
          event={lastBooking.event}
          seats={lastBooking.seats}
          onClose={() => setShowConfirm(false)}
        />
      )}
    </Layout>
  )
}

export default Events