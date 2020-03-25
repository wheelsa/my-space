import React from 'react'
import axios from 'axios';

export const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

export default class UserProvider extends React.Component {

state = {
 users: null
};

  componentDidMount(){ 
    axios.get('/api/users')
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
    return(
    <UserContext.Provider value={{...this.state,
    setUser: (user) => this.setState({ user, })}} >
        { this.props.children}
      </UserContext.Provider>
    )
  }

}