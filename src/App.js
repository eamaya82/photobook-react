import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {logout, userInfo} from './services/firebase'
import Header from './Components/Header'
import Footer from './Components/Footer'

import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import PasswordRecovery from './Components/PasswordRecovery'

import NewPost from './Components/NewPost'
import Timeline from './Components/Timeline'
import Post from './Components/Post'
import Profile from './Components/Profile'

import "bootstrap/dist/css/bootstrap.min.css"
import './css/icomoon/style.css'
import './css/style.scss'
import logo from './logo.svg'

class App extends Component {
  constructor(){
    super();
    this.state = {
        isAuth: false,
        user:'',
        email:'',
        showNewPost: false
    }
    this.showNewPost = this.showNewPost.bind(this)
    this.login = this.login.bind(this)
  }
  showNewPost = show => {
    this.setState({
      showNewPost:show
    }) 
  }

  login = isAuth => {
  
    if(isAuth){
      window.location = '/'
    }else{
      logout()
      window.location = '/'
    } 
      
  }

  componentDidMount(){
    userInfo
    .then(user=>{
      this.setState({
        isAuth: !!user,
        email:user.email,
        user:user.email.split("@")[0]
      })
    })
  }

  render() {
    return (
        <BrowserRouter>
        <main>
        <Header user={this.state.user} isAuth={this.state.isAuth} showNewPost={this.showNewPost} login={this.login} />
        {
          !this.state.isAuth ?
            <div>
              <h1><img src={logo} className="App-logo" alt="logo" /></h1>
              <Switch>
                <Route exact path="/" component={() => <SignIn login={this.login} />} />
                <Route path="/signup" component={() => <SignUp login={this.login} />}  />
                <Route path="/passwordRecovery" component={PasswordRecovery} />
              </Switch>
            </div>  
          : 
            <div>
              { 
                this.state.showNewPost &&
                  <NewPost showNewPost={this.showNewPost} />
              }
              <Switch>

                <Route exact path="/" component={Timeline} />
                <Route path="/post/:id" component={Post} />
                <Route path="/profile" component={Profile}  />
                <Route path="/profile/:id" component={Profile} />
                
              }
                </Switch>
            </div>  
        }
        <Footer /> 
      </main>
        </BrowserRouter> 
    );
  }
}

export default App;
