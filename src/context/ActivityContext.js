import { createContext, useReducer } from 'react'

export const ActivitiesContext = createContext()

export const activitiesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVITY':
      return { 
        activities: action.payload 
      }
    case 'CREATE_ACTIVITY':
      return { 
        activities: [action.payload, ...state.activities]
      }
    case 'DELETE_ACTIVITY':
      return { 
          activities: state.activities.filter(w => w._id !== action.payload._id) 
      }
    case 'UPDATE_ACTIVITY':
      return { 
        activities: state.activities.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const ActivitiesContextProvider = ({ children }) => {
  const [state, dispatchActivity] = useReducer(activitiesReducer, { 
    activities: null
  })

  return (
    <ActivitiesContext.Provider value={{ ...state, dispatchActivity }}>
      { children }
    </ActivitiesContext.Provider>
  )
}