import Layout from '../components/Layout'
import { useBooking } from '../logic/BookingLogic'
import EventCard from '../components/EventCard'

const Bookings = () => {
  const { bookedEvents, cancelBooking } = useBooking()

  const handleCancelEvent = (eventId) => {
    cancelBooking(eventId)
    alert('You have canceled the event.')
  }

  return (
    <Layout title="Bookings" active="Bookings">
      <h2>Your booked Events!</h2>
      {bookedEvents.length === 0 ? (
        <p>You have not booked any EVENTS yet.</p>
      ) : (
        bookedEvents.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onBook={handleCancelEvent}
            buttonLabel="Cancel booking"
          />
        ))
      )}
    </Layout>
  )
}


export default Bookings
