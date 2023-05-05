import { useState } from 'react'
import { useReservationContext } from '../hooks/useReservationContext'
import { useAuthContext } from '../hooks/useAuthContext'

const ReservationForm = () => {
  const { dispatch } = useReservationContext()
  const { user } = useAuthContext()
  const [title, setTitle] = useState('')
  // const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [noOfParticipants, setParticipants] = useState('')
  const [pointPerson, setPointPerson] = useState('')
  const [contact, setContact] = useState('')
  const [status, setStatus] = useState(true)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const reservations = { title, location, noOfParticipants, pointPerson, contact }

    const response = await fetch('/api/reservations/', {
      method: 'POST',
      body: JSON.stringify(reservations),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLocation('')
      setParticipants('')
      setPointPerson('')
      setContact('')
      // setDate('')
      setStatus(true)

      console.log('new reservation added:', json)
      dispatch({ type: 'CREATE_RESERVATION', payload: json })
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Reservation</h3>

      <label>Reservation Name:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>location:</label>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />

      <label>Number of Participants:</label>
      <input
        type="number"
        onChange={(e) => setParticipants(e.target.value)}
        value={noOfParticipants}
      />

{/* <     label>Date:</label>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      /> */}


      <label>Point Person:</label>
      <input
        type="text"
        onChange={(e) => setPointPerson(e.target.value)}
        value={pointPerson}
      />

      <label>Contact: </label>
      <input
        type="number"
        onChange={(e) => setContact(e.target.value)}
        value={contact}
      />
      
      <button>Add Reservation</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ReservationForm