import { useEffect } from "react"
import { useActivitiesContext } from "../hooks/useActivityContext"

// components
import ActivityDetails from '../components/ActivityDetails'
// import ActivityForm from '../components/ActivityForm'

const Home = () => {
    // const { activities, dispatch } = useActivitiesContext()

    // useEffect(() => {
    //     const fetchActivities = async () => {
    //         const response = await fetch('/api/activities')
    //         const json = await response.json()

    //         if (response.ok) {
    //             dispatch({type: 'SET_ACTIVITY', payload: json})
    //         }
    //     }

    //     fetchActivities()
    // }, [dispatch])

    return (
        <div className="home">
            {/* <div className="activities">
                {activities && activities.map(activity => (
                    <ActivityDetails activity={activity} key={activity._id}/>
                ))}
            </div> */}
            {/* <ActivityForm /> */}
        </div>
    )
}

export default Home;