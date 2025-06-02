const EventCard = ({ event, onBook, buttonLabel = "Book Event", isBooked = false }) => {
  return (
    <div className="event-card">
      <div className="pic-box">
        <div className="fluid-description"><p className="fluid-description-text">Outdoor & Adventure</p></div>
      </div>
      <p className="event-text">{event.date}</p>
      <h3 className="event-header">{event.title}</h3>
      <p className="event-text">{event.location}</p>
      <button 
        className="event-btn" 
        onClick={() => onBook(event.id)}
        disabled={isBooked}>
        {isBooked ? "Booked" : buttonLabel}
      </button>
    </div>
  )
}

export default EventCard