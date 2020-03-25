import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import axios from 'axios'
import { AuthConsumer, } from "../providers/AuthProvider"

class ProfilePage extends React.Component{
 
state = {
  users: ''
 };
 
   componentDidMount(){ 
     const userID= this.props.auth.user.id
    
     axios.get(`/api/users/${userID}`)
     .then((res)=>{
       this.setState({
         users: res.data
       })
       
     })
     .catch((err) =>{
       console.log(err)
     })
   }

  render(){
    const {email, name, nickname} = this.state.users
 
  return(
    <>
     <Card>
    <Image src='' wrapped ui={false} />
    <Card.Content>
      <Card.Header> Nickname: {nickname} </Card.Header>
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
      <br />
      <span>Name: {name} </span>
      <br />
      <span>Email: {email}  </span>
    </Card.Content>
  </Card>

    <Button 
      color="blue"
      onClick={this.props.history.goBack}>
        Back
    </Button>
    </>
  )}
  }

  export default class ConnectedProfilePage extends React.Component {
    render() {
      return (
        <AuthConsumer>
          {auth => <ProfilePage {...this.props} auth={auth} />}
        </AuthConsumer>
      )
    }
  }
  

