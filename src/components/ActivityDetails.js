import { useActivitiesContext } from "../hooks/useActivityContext"
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Button } from "react-bootstrap"

import Stack from 'react-bootstrap/Stack'

const ActivityDetails = ({ activity }) => {
    const { dispatch } = useActivitiesContext()

    const handleClick = async () => {
        const response = await fetch('/api/activities/' + activity._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_ACTIVITY', payload: json})
        } 
    }

    return (
        <div className="activity-details">
            <Stack direction="horizontal" gap={3}>
                <span className="align-middle">{activity.title}</span>
                {/* <p>{activity.body}</p> */}
                {/* <p>{formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true})}</p> */}
                <Button variant="outline-secondary" className="ms-auto">
                    <span className="material-symbols-outlined align-middle">edit</span>
                </Button>
                <Button variant="outline-danger">
                    <span className="material-symbols-outlined align-middle" onClick={handleClick}>delete</span>
                </Button>
            </Stack>
        </div>
    )
}

export default ActivityDetails