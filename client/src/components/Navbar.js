import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return(
        <Menu.Menu position='right'>
         <Link to ='/profile'>
           <Menu.Item
            id='profile'
            name='profile'
            active={location.pathname === '/profile'}
            />
          </Link>
        <Menu.Item
        name='logout'
        onClick={ () => handleLogout(this.props.history) }
        />
        </Menu.Menu>
      )

    } else {
      return (
        <Menu.Menu position='right'>
          <Link to ='/login'>
            <Menu.Item
            id='login'
            name='login'
            active={location.pathname === '/login'}
            />
          </Link>
          <Link to ='/register'>
            <Menu.Item
            id='register'
            name='register'
            active={location.pathname === '/register'}
           />
          </Link>
        </Menu.Menu>
      )
    }
  }

render(){

  return(
    <div>
      <Menu pointing secondary>
        <Link to='/'>
          <Menu.Item 
           name='home'
           id='home'
           active={this.props.location.pathname === '/'} />
        </Link>
        <Link to='/profiles'>
          <Menu.Item 
           name='Discover Friends'
           id='profiles'
           active={this.props.location.pathname === '/profiles'} />
        </Link>
        <Link to='/my_profiles'>
          <Menu.Item 
           name='My Friends'
           id='my_profiles'
           active={this.props.location.pathname === '/my_profiles'} />
        </Link>
        
        { this.rightNavItems() }
      </Menu>
    </div>
  )
}
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}
export default withRouter(ConnectedNavbar);