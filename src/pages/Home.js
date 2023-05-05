import { useEffect } from "react"
import { useReservationContext } from "../hooks/useReservationContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import ReservationDetails from "../components/ReservationDetails"
import ReservationForm from "../components/ReservationForm"

const Home = () => {
    const { reservations, dispatch } = useReservationContext()
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
                dispatch({ type: 'SET_RESERVATION', payload: json })
            }
        }
        
        if (user) {
            fetchReservation()
        }
    }, [dispatch, user])


    return (
        <div className="home">
            <div className="reservations">
                {reservations && reservations.map((reservations) => (
                    <ReservationDetails key={reservations._id} reservations={reservations} />))}
            </div>
            <ReservationForm />
        </div>
    )
}

export default Home