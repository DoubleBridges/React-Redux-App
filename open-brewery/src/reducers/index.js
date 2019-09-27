import { FETCHING_BREWERY, BREWERY_FETCH_SUCCESS, BREWERY_FETCH_ERROR } from '../actions'

const initialState = { breweries: [], fetchingBreweries: false, error: '' }

export const breweryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BREWERY:
      return {
        ...state,
        fetchingBreweries: true
      }
    case BREWERY_FETCH_SUCCESS:
      return {
        ...state,
        breweries: [...state.breweries, ...action.payload],
        fetchingBreweries: false
      }
    case BREWERY_FETCH_ERROR:
      return {
        ...state,
        fetchingBreweries: false,
        error: 'Error getting breweries'
      }
    default:
      return state
  }
}