const initialState = {
  planets: null,
  status: 'loading'
}
export const planetReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
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
