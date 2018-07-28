import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

import SingIn from './Components/SingIn';
import SingUp from './Components/SingUp';
import PasswordRecovery from './Components/PasswordRecovery';

import TimeLine from './Components/TimeLine';
import Post from './Components/Post';
import Profile from './Components/Profile';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/form.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <img src={logo} className="App-logo" alt="logo" />

        <SingIn />
        <SingUp />
        <PasswordRecovery />
        <TimeLine />
        <Post />
        <Profile />
        <Footer />
      </main>
    );
  }
}

export default App;
