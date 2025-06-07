import { useState } from 'react'
import { useDeveloper } from '../logic/DeveloperLogic'

const DeveloperModal = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const { addEvent } = useDeveloper()

  const handleSubmit = () => {
    const newEvent = {
      id: Date.now(), // eller generera UUID
      title,
      date,
      location,
      price: parseFloat(price),
      description
    }
    addEvent(newEvent)
    onClose()
  }

  return (
    <div className="confirmation-modal">
      <div className="confirmation-box">
        <h3>Add New Event</h3>
        <input className='input-field' placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input id='price-input' className='input-field' type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
        <input className='input-field' placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
        <input className='input-field' type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
        <textarea className='input-field' placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        
        <button className='add-btn' onClick={handleSubmit}>Add Event</button>
        <button className='close-btn2' onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default DeveloperModal
