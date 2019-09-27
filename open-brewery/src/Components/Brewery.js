import React from 'react'
import { Card } from 'semantic-ui-react'

const Brewery = props => {

  return (
    <Card
      header={props.name}
      meta={`Type: ${props.type}`}
      description={props.website_url}
    />
  )
}

export default Brewery