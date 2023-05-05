import { useEffect } from "react"
import { useActivitiesContext } from "../hooks/useActivityContext"
import { useAuthContext } from "../hooks/useAuthContext"

import ActivityForm from '../components/ActivityForm'
import ReservationForm from '../components/ReservationForm'
import ActivityDetails from '../components/ActivityDetails'
import ReservationDetails from '../components/ReservationDetails'

import Card from 'react-bootstrap/Card'
import { Tab, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { useReservationContext } from "../hooks/useReservationContext"


const Admin = () => {
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


    const { reservation, dispatchReservation } = useReservationContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchReservation = async () => {
            const response = await fetch('/api/reservations', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatchReservation({ type: 'SET_RESERVATION', payload: json })
            }
        }
        
        if (user) {
            fetchReservation()
        }
    }, [dispatchReservation, user])

    return (
        <Container className='my-2'><Row><Col><Tab.Container id="inner-tabs" defaultActiveKey="first">
            <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey="first">Manage Activities</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Manage Reservations</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className='my-5'>
                <Tab.Pane eventKey="first">
                    <h1>Manage Activities</h1>
                    <Row className='py-4'>
                        <Col md={false} lg={6} xl={5} className="mb-5">
                            <Card className='px-4 py-5'>
                                <h3>Create a new Activity</h3>
                                <Card.Body>
                                    <ActivityForm />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={false} lg={6} xl={7}>
                            <Card>
                                <ListGroup variant="flush">
                                    {activities && activities.map(activity => (
                                        <ListGroup.Item>
                                            <ActivityDetails activity={activity} key={activity._id}/>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <h1>Manage Reservations</h1>
                    <Row className='py-4'>
                        <Col md={false} lg={6} xl={7}>
                            <Card>
                                <ListGroup variant="flush">
                                    {reservation && reservation.map(reservation => (
                                        <ListGroup.Item>
                                            <ReservationDetails reservation={reservation} key={reservation._id}/>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container></Col></Row></Container>
    )
}

export default Admin;