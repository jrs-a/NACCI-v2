import { useAuthContext } from './useAuthContext'
import { useReservationContext } from './useReservationContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchReservations } = useReservationContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchReservations({ type: 'SET_RESERVATION', payload: null })
  }

  return { logout }
}