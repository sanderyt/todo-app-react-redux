import React, { Component } from 'react';
//Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/Login';
import Home from './pages/Home';
//Redux
import { connect } from 'react-redux';
import { logOut, logIn } from './redux/actions';
//FB
import Fire from './config/Firebase'
//SCSS
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
        this.props.logIn();
      } else {
        this.setState({user: null}) 
        this.props.logOut();
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
      <h1>Hi</h1>
        {this.state.user ? 
          (<Home />)
        : (<Login />)}
      <Footer />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged
  }
}

const mapDispatchToProps = () => {
  return {
    logIn,
    logOut
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(App);