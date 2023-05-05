import { useState } from 'react'
import { useReservationContext } from '../hooks/useReservationContext'
import { useAuthContext } from '../hooks/useAuthContext'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ReservationForm = () => {
  const { dispatchReservation } = useReservationContext()
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
      dispatchReservation({ type: 'CREATE_RESERVATION', payload: json })
    }

  }

  return (
    <Form className="create" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Reservation Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Enter reservation name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Enter location"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNumParticipants">
        <Form.Label>Number of Participants</Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => setParticipants(e.target.value)}
          value={noOfParticipants}
          placeholder="Enter number of participants"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPointPerson">
        <Form.Label>Point Person</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setPointPerson(e.target.value)}
          value={pointPerson}
          placeholder="Enter point person"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Contact</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          placeholder="Enter contact information"
        />
      </Form.Group>

      <Button variant="outline-success" type="submit" className="align-middle">
        Submit
      </Button>
    </Form>
  )
}

export default ReservationForm