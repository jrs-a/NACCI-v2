import { useEffect } from "react"
import { useReservationContext } from "../hooks/useReservationContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import ReservationDetails from "../components/ReservationDetails"
import { Container, Tab } from "react-bootstrap"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

const Home = () => {
    const { reservations, dispatchReservation } = useReservationContext()
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
        <Container><Row><Col>
            <Tab.Container>
                <Tab.Content>
                    <Tab.Pane eventKey="second">
                        <h1>Manage Reservations</h1>
                        <Row className='py-4'>
                            <Col md={false} lg={6} xl={7}>
                                <Card>
                                    <ListGroup variant="flush">
                                        {   reservations && reservations.map((reservations) => (
                                            <ListGroup.Item>
                                                <ReservationDetails key={reservations._id} reservations={reservations} />
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Col></Row></Container>
    )
}

export default Home