import { createContext, useReducer } from 'react'

export const ReservationContext = createContext()

export const ReservationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESERVATION':
      return {
        reservations: action.payload
      }
    case 'CREATE_RESERVATION':
      return {
        reservations: [action.payload, ...state.reservations]
      }
    case 'DELETE_RESERVATION':
      return {
        reservations: state.reservations.filter(w => w._id !== action.payload._id)
      }
    case 'UPDATE_RESERVATION':
      return {
        reservations: state.reservations.filter(w => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const ReservationContextProvider = ({ children }) => {
  const [state, dispatchReservation] = useReducer(ReservationReducer, {
    reservations: null
  })

  return (
    <ReservationContext.Provider value={{ ...state, dispatchReservation }}>
      {children}
    </ReservationContext.Provider>
  )
}