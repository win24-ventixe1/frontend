import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import EventCard from '../components/EventCard'
import { useBooking } from '../logic/BookingLogic'

const Events = () => {
  const [events, setEvents] = useState([])
  const { bookedEvents, bookEvent } = useBooking() // ← här får du funktionen att spara bokningen

  useEffect(() => {
    fetch('https://localhost:7152/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err))
  }, [])

  const handleBooking = (eventId) => {
    const selectedEvent = events.find(e => e.id === eventId)
    if (selectedEvent) {
      bookEvent(selectedEvent)
      alert(`You have booked "${selectedEvent.title}"`)
    }
  }

  const isEventBooked = (eventId) => {
    return bookedEvents.some(e => e.id === eventId)
  }

  return (
    <Layout title="Events" active="Events">
      <h2>Upcoming Events</h2>
      {events.map(event => (
        <EventCard key={event.id} event={event} onBook={handleBooking}
        buttonLabel="Book Event"
        isBooked={isEventBooked(event.id)} />
      ))}
    </Layout>
  )
}

export default Events
