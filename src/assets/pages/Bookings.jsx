import { useState } from 'react'
import Layout from '../components/Layout'
import { useBooking } from '../logic/BookingLogic'
import EventCard from '../components/EventCard'
import CancelConfirmation from '../components/confirmations/CancelConfirmation'

const Bookings = () => {
  const { bookedEvents, cancelBooking } = useBooking()

  const [showConfirm, setShowConfirm] = useState(false)
  const [lastBooking, setLastBooking] = useState(null)

  const handleCancelEvent = (eventId) => {
  const canceledEvent = bookedEvents.find(e => e.id === eventId)
  cancelBooking(eventId)
  setLastBooking({ event: canceledEvent })
  setShowConfirm(true)
}

  return (
    <Layout title="Bookings" active="Bookings">
      <h2>Your booked Events:</h2>
      {bookedEvents.length === 0 ? (
        <p>You have not booked any EVENTS yet.</p>
      ) : (
        <div className="event-grid">
          {bookedEvents.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onBook={handleCancelEvent}
              buttonLabel="Cancel Booking"
              showSeats={true}
              isBookingView={true}
            />
          ))}
        </div>
      )}

      {showConfirm && lastBooking && (
        <CancelConfirmation
          event={lastBooking.event}
          onClose={() => setShowConfirm(false)}
        />
      )}
    </Layout>
  )
}

export default Bookings