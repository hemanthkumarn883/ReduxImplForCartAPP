import React from 'react';
import './index.css';
import { userLogin } from './reducers/login';
import { connect } from 'react-redux'
import ContactForm from './myReduxForm'



class Login extends React.Component {
  submit = (values) =>{
    console.log('values ', values);
  }
  
  render(){
    return(
      <div className="w-100" style={{height: 'calc(100vh - 56px)'}}>
        <div className="positionCenter card shadow p-3 d-flex justify-content-center">
          <span className="mb-3">Enter Name</span>
          <input className="w-100 mb-3" onChange={(e) => {this.setState({value: e.target.value})}}></input>
          <button className="btn btn-outline-dark w-100" onClick={()=>this.props.dispatch(userLogin(this.state.value))}>Magic</button>
        </div>
        <div className="card col-4 center">
          <ContactForm onSubmit={this.submit}/>
        </div>
      </div>
    )
  }
}

export default connect()(Login);