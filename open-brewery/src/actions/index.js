import axios from 'axios'

export const FETCHING_BREWERY = "FECTHING_BREWERY"
export const BREWERY_FETCH_SUCCESS = "BREWERY_FETCH_SUCCESS"
export const BREWERY_FETCH_ERROR = "BREWERY_FETCH_ERROR"

export const fetchBreweries = () => {
  const promise = axios.get(`https://api.openbrewerydb.org/breweries`)
  return dispatch => {
    dispatch({ type: FETCHING_BREWERY })
    promise
      .then(res => {
        dispatch({ type: BREWERY_FETCH_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: BREWERY_FETCH_ERROR})
      })
  }
}