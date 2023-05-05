import { useActivitiesContext } from "../hooks/useActivityContext"
import { Button } from "react-bootstrap"
import { useState } from "react"

import Card from 'react-bootstrap/Card';

const ActivityDetails = ({ activity }) => {
    const { dispatchActivity } = useActivitiesContext()
    const parse = require('html-react-parser')
    
    const rawbody = activity.body
    
    const formatted = parse(`${rawbody}`)
    

    const handleClick = async () => {
        const response = await fetch('/api/activities/' + activity._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatchActivity({type: 'DELETE_ACTIVITY', payload: json})
        }
    }



    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [coverurl, setCoverUrl] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const addReservation = async (e) => {
        e.preventDefault()
    
        const activity = {title, body, coverurl}
    
        const response = await fetch('/api/activities', {
          method: 'POST',
          body: JSON.stringify(activity),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()                                                                             
    
        if (!response.ok) {
          setError(json.error)
          setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
          setEmptyFields([])
          setError(null)
          setTitle('')
          setBody('')
          console.log('new activity added:', json)
          dispatchActivity({type: 'CREATE_ACTIVITY', payload: json})
        }
    }

    return (
        // <div className="activity-details">
            <Card>
                <Card.Img variant="top" src={activity.coverurl} />
                <Card.Body>
                    <Card.Title>{activity.title}</Card.Title>
                    <Button variant="primary" onClick={addReservation}>Add this reservation</Button>
                </Card.Body>
            </Card>
        // </div>
    )
}

export default ActivityDetails