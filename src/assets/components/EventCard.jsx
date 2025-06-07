import { useState } from 'react'

console.log("Event data:", event)

const EventCard = ({ event, onBook, buttonLabel = "Book Event", isBooked = false, showSeats = false, isBookingView = false }) => {
  
  const [seats, setSeats] = useState(1)

  const formattedDate = new Date(event.date).toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true
  })

  return (
    <div className="event-card">
      <div className="pic-box">
        <div className={`fluid-description ${isBookingView ? 'booking-adjustment' : ''}`}>
        <p className="fluid-description-text">Indoor & TechMania</p>
      </div>
      <div className="event-hover-description"><p>{event.description}</p></div>
    </div>
      <p className="event-text">{formattedDate}</p>
      <h3 className="event-header">{event.title}</h3>
      <p className="event-text">{event.location}</p>
      <p className="event-price">
        {(parseFloat(event.price) * (showSeats ? event.seats : seats)).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </p>
      {showSeats && (<p className="event-text">Seats: {event.seats}</p>)}

      {!isBooked && !showSeats && (
        <input
          type="number"
          min="1"
          value={seats}
          onChange={(e) => setSeats(parseInt(e.target.value))}
          className="seats-input"
        />
      )}

      <button 
        className="event-btn" 
        onClick={() => onBook(event.id, seats)}
        disabled={isBooked}>
        {isBooked ? "Booked" : buttonLabel}
      </button>
    </div>
  )
}

export default EventCard