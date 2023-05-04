import { useState } from "react"
import { useActivitiesContext } from "../hooks/useActivityContext"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ActivityForm = () => {
    const { dispatch } = useActivitiesContext()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const activity = {title, body}
    
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
          dispatch({type: 'CREATE_ACTIVITY', payload: json})
        }
      }

    // return (
    //     <form className="create" onSubmit={handleSubmit}>
    //         <h3>Add a new Activity</h3>
    //         <label>Activity Title:</label>
    //         <input 
    //           type="text" 
    //           onChange={(e) => setTitle(e.target.value)}
    //           value={title}
    //           className={emptyFields.includes('title') ? 'error' : ''}
    //         />

    //         <label>Activity Body</label>
    //         <input 
    //           type="text" 
    //           onChange={(e) => setBody(e.target.value)}
    //           value={body}
    //           className={emptyFields.includes('body') ? 'error' : ''}
    //         />
    //         <button>Add Activity</button>
    //         {error && <div className="error">{error}</div>}
    //     </form>
    // )

    return (
      <Form className="create" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formActivityTitle">
          <Form.Label>Activity Title</Form.Label>
          <Form.Control 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
            placeholder="Enter activity title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formActivityBody">
          <Form.Label>Activity Body</Form.Label>
          <Form.Control 
            onChange={(e) => setBody(e.target.value)}
            value={body}
            className={emptyFields.includes('body') ? 'error' : ''}
            as="textarea" 
            rows={3} 
            placeholder="Enter activity body" />
        </Form.Group>

        <Button variant="outline-success" type="submit" class="align-middle">
          Create New Activity
        </Button>
        {error && <div className="error">{error}</div>}
      </Form>
    );
}

export default ActivityForm