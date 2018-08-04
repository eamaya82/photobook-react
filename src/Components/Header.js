import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import logo from './../logo-white.svg'

class Header extends Component{
  render(){
    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        {
          this.props.isAuth &&
            <div className="container">
                  <h1><figure>
                    <Link to="/"><img src={logo} alt="Photobook" width="140px" /></Link></figure>
                  </h1> 
                  <div>
                    <Link to="#" onClick={this.props.showNewPost}><span className="icon-plus"></span></Link>
                    <Link to="/profile"><span className="icon-user"></span>Username</Link>
                    <Link to="#" onClick={this.props.doLogOut}><span className="icon-sign-out"></span></Link>
                  </div>
            </div>
        }    
          </nav>
        
      </header>
    )
  }

}
export default Header
