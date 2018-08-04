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
                    <a href="#"><img src={logo} alt="Photobook" width="140px" /></a></figure>
                  </h1>
                  <div>
                    <Link to="/"><span className="icon-plus"></span></Link>
                    <Link to="/profile"><span className="icon-user"></span>Username</Link>
                    <Link to="/"><span className="icon-exit"></span></Link>
                  </div>
            </div>
        }    
          </nav>
        
      </header>
    )
  }

}
export default Header
