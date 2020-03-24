import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

import { AuthConsumer, } from "../providers/AuthProvider";

export default class ProfilePage extends React.Component {


  render(){
    
    // const {name, description} = this.state.department
    
  return(
    <>
     <Card>
    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Name</Card.Header>
      <Card.Meta>Date Joined</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>

    <Button 
      color="blue"
      onClick={this.props.history.goBack}>
        Back
    </Button>
    </>
  )
}
}
