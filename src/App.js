import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import PasswordRecovery from './Components/PasswordRecovery';

import NewPost from './Components/NewPost';
import Timeline from './Components/Timeline';
import Post from './Components/Post';
import Profile from './Components/Profile';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/icomoon/style.css';
import './css/style.scss';
import logo from './logo.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
        isAuth: true,
        showNewPost: true
    }
  }
  hideNewPost(){
    this.setState({
      showNewPost: false
    })
  }
  render() {
    return (
        <BrowserRouter>
        <main>
        <Header isAuth={this.state.isAuth} />
        {
          !this.state.isAuth ?
            <div>
              <h1><img src={logo} className="App-logo" alt="logo" /></h1>
              <Switch>
                <Route exact path="/" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/passwordRecovery" component={PasswordRecovery} />
              </Switch>
            </div>  
          : 
            <div>
              { 
                this.state.showNewPost &&
                  <NewPost hideNewPost={this.hideNewPost} />
              }
              <Switch>
                <Route exact path="/" component={Timeline} />
                <Route path="/post/:id" component={Post} />
                <Route path="/profile" component={Profile}  />
                <Route path="/profile/:id" component={Profile} />
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
