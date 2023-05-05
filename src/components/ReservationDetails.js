import { useState } from "react";
import { useReservationContext } from "../hooks/useReservationContext"
import { useAuthContext } from "../hooks/useAuthContext";

//
const ReservationDetails = ({ reservations }) => {
  const { dispatch } = useReservationContext()
  const { user } = useAuthContext()
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [error,setError] = useState('')
  const [noOfParticipants, setParticipants] = useState('')
  const [pointPerson, setPointPerson] = useState('')
  const [contact, setContact] = useState('')
  const [status, setStatus] = useState(true)

  const handleClick = async () => {
    if (!user) {
      return
    }
    const response = await fetch('/api/reservations/' + reservations._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    console.log(reservations._id);
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_RESERVATION', payload: json })
    }
  }

  //testing update
  const handleSubmit = async (e) => {
    e.preventDefault()
    const reservation = { title, location, noOfParticipants, pointPerson, contact }
    console.log(reservations._id);

    const response = await fetch('/api/reservations/' + reservations._id, {
      method: 'PATCH',
      body: JSON.stringify(reservation),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if(response.ok) {
      setError(null)
      setTitle('')
      setLocation('')
      setParticipants('')
      setPointPerson('')
      setContact('')
      setStatus(true)

      console.log('new reservation added:', json)
      dispatch({type: 'UPDATE_RESERVATION', payload: json})
    }

  }

  return (
    <div className="reservation-details">
      <h2>{reservations.title}</h2>
      <p><strong>location: </strong>{reservations.location} </p>
      <p><strong>Number of Particpants: </strong>{reservations.noOfParticipants} </p>
      <p><strong>Point person: </strong>{reservations.pointPerson} </p>
      <p><strong>Contact: </strong>{reservations.contact} </p>
      <p><strong>Status </strong>{reservations.status} </p>
      <p>{reservations.createdAt} </p>

    
      <span onClick={handleClick}>delete</span>
      <form className="delete" onSubmit={handleSubmit}>
      <h3>Update Reservation</h3>

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
      
      <button>Update Reservation</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
    
  )
}
export default ReservationDetails