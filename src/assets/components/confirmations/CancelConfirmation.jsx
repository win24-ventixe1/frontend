import { useEffect } from 'react'

const CancelConfirmation = ({ event, onClose }) => {
  useEffect(() => {
  }, [onClose])

  return (
    <div className='confirmation-modal'>
      <div className='confirmation-box'>
        <h3>Canceled Booking Confirmed</h3>
        <p>You have canceled <strong>{event.title}</strong></p>
        <p>Book a new Event under <strong>Events</strong>.</p>
        <button className='x-btn' onClick={onClose}>X</button>
      </div>
    </div>
  )
}

export default CancelConfirmation;