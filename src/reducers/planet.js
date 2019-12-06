const initialState = {
  planets: null,
  status: null
}
export const planetReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'PLANETS_FETCH_REQUEST':
      return {
        status: 'loading'
      }
    case 'PLANETS_FETCH_SUCCESS':
      return {
        planets: action.payload,
        status: 'done'
      }
    case 'PLANETS_FETCH_FAILURE':
      return {
        status: 'error'
      }
    default:
      return state
  }
}
