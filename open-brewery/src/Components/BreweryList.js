import React, { useEffect } from 'react'
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { fetchBreweries } from '../actions/'
import Brewery from './Brewery';

const BreweryList = props => {

  useEffect(() => {
    props.fetchBreweries()
  }, []);

  const breweryList = props.breweries.map(brewery => {
    return (
      <Brewery
        name={brewery.name}
        type={brewery.brewery_type}
        website_url={brewery.website_url}
      />
    )
  })

  return (
    <Card.Group itemsPerRow={4}>
      {breweryList}    
    </Card.Group>
  )
}

const mapPropsToState = state => {
  return {
    breweries: state.breweries,
    error: state.error,
    fetchingBreweries: state.fetchingBreweries
  }
}

export default connect(mapPropsToState, { fetchBreweries })(BreweryList)