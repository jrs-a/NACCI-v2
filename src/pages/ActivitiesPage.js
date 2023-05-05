import { useEffect } from "react"
import { useActivitiesContext } from "../hooks/useActivityContext"

import ActivityForm from '../components/ActivityForm'
import ActivityCard from '../components/ActivityCard'

import Card from 'react-bootstrap/Card';
import { Tab, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const ActivitiesPage = () => {
    const { activities, dispatchActivity } = useActivitiesContext()

    useEffect(() => {
        const fetchActivities = async () => {
            const response = await fetch('/api/activities')
            const json = await response.json()

            if (response.ok) {
                dispatchActivity({type: 'SET_ACTIVITY', payload: json})
            }
        }

        fetchActivities()
    }, [dispatchActivity])

    return (
        <Container className="mt-5">
            <h3 className="text-center mb-5">Explore activitites</h3>
            <Row>
                {activities && activities.map(activity => (
                    <Col lg={4}>
                        <Card className="m-3">
                            <ActivityCard activity={activity} key={activity._id}/>
                        </Card>
                    </Col>    
                ))}    
            </Row>
        </Container>
    )
}

export default ActivitiesPage;