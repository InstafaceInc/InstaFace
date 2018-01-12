import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'; 
import fire from '../firebaseAuth';
import setUser from '../reducers/setUser'
  

class Authorization extends Component {
  constructor(props) {
    super(props); 
    fire.initFirebase(()=>{});
    //fire.signOut(); 
  }

  render() {
    return (
      <div className="auth">
        <img 
          src="./assets/icons/google-login.png" 
          alt="google-login"
          className="loginBtn"
        />
        <img 
          src="./assets/icons/facebook-login.png" 
          alt="facebook-login"
          className="loginBtn"
        />
      </div>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    activeUser: activeUser
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUser: setUser
  }, dispatch); 
}

export default connect(matchDispatchToProps)(Authorization);

