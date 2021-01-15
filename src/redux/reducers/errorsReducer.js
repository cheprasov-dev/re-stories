const SET_MAIN_ERROR = 'ERRORS/SET_MAIN_ERROR'
const ERROR_INIT_USER = 'ERRORS/ERROR_INIT_USER'

export const setMainError = (error) => ({ type: SET_MAIN_ERROR, payload: { error } })
export const setErrorInitUser = (error) => ({ type: ERROR_INIT_USER, payload: { error } })

const errorsInitState = {
  mainError: null,
  errorInitUser: false,
}

export function errorsReducer (state = errorsInitState, action) {
  switch (action.type) {
    case SET_MAIN_ERROR:
      return {
        ...state,
        mainError: action.payload.error
      }
    case ERROR_INIT_USER:
      return {
        ...state,
        errorInitUser: action.payload.error
      }
    default:
      return state
  }
}
