export const fetchPlanets = () => dispatch => {
  dispatch(fetchPlanetsRequest())
  const apiEndpoint = 'https://swapi.co/api/planets'
  return fetch(apiEndpoint)
    .then(response => response.json())
    .then(({ results }) => dispatch(fetchPlanetsSuccess(results)))
    .catch(err => dispatch(fetchPlanetsFailure(err)))
}

export const fetchPlanetsRequest = () => ({
  type: 'PLANETS_FETCH_REQUEST'
})

export const fetchPlanetsSuccess = planets => ({
  type: 'PLANETS_FETCH_SUCCESS',
  payload: planets
})
export const fetchPlanetsFailure = () => ({
  type: 'PLANETS_FETCH_FAILURE'
})
