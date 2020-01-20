import React, { Component } from 'react';
import Fire from './config/Firebase'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/Login';
import Home from './pages/Home';

import { connect } from 'react-redux';
import { logOut, logIn, getUser, removeUser, getProjects } from './redux/actions';

import './App.scss';

class App extends Component {

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.getUser(user);
        this.props.logIn();
      } else {
        this.props.logOut();
        this.props.removeUser();
      }
    })
  }
  
  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
    <div className="App">
      <Header />
        {this.props.isLogged ? 
          (<Home />)
        : (<Login />)}
      <Footer />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
    user: state.isUser,
  }
}

const mapDispatchToProps = () => {
  return {
    logIn,
    logOut,
    getUser,
    removeUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(App);