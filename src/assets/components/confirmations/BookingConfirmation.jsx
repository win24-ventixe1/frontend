import { useEffect } from 'react'

const BookingConfirmation = ({ event, seats, onClose }) => {
  useEffect(() => {
  }, [onClose])

  const formattedDate = new Date(event.date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <div className='confirmation-modal'>
      <div className='confirmation-box'>
        <h3>Booking Confirmed</h3>
        <p>You have booked <strong>{event.title}</strong></p>
        <p>For <strong>{seats}</strong> {seats === 1 ? 'person' : 'people'}</p>
        <p>On <strong>{formattedDate}</strong></p>
        <p>View your bookings under <strong>Bookings</strong>.</p>
        <button className='x-btn' onClick={onClose}>X</button>
      </div>
    </div>
  )
}

export default BookingConfirmation;
