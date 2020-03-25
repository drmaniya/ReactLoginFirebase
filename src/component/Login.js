import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import fb from '../Firebase.js';
import  { Redirect } from 'react-router-dom';
class Login extends Component{
  constructor(props){
  	super(props);
  	this.state = {
  		email:'',
  		password:''
  	}


    this.saveData = this.saveData.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }
  componentDidMount()
  {
  	this.Listner();
  	
  }
  Listner(user) {
   fb.auth().onAuthStateChanged((user) => {
     if(user){
     	this.setState({user});
     }else
     {
     	this.setState({user:null});
     }
   });
 }

 handlechange(e)
 {
 	this.setState({
 		[e.target.name]:e.target.value
 	});
 }

  saveData(e)
  {
  	e.preventDefault();
  fb.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
   .then(()=>{
   	   this.props.history.push("/home");
   })
    .catch(function(error) {
   
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
  });
}
 
	render()
	{
  		return(
  		
     <div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label for="recipient-name" className="col-form-label">Email:</label>
            <input type="email" onChange={this.handlechange} className="form-control" name="email" value={this.state.email} id="recipient-name" />
          </div>
          <div class="form-group">
            <label for="message-text" className="col-form-label">Password:</label>
            <input type="password" className="form-control" onChange={this.handlechange}  name="password" value={this.state.password} id="message-text" />
          </div>
        </form>
      </div>
      <div class="modal-footer">
     
        <button type="button" onClick={this.saveData} className="btn btn-primary">Login</button>
      
      </div>
    </div>
  
		)
	}
}

export default Login;

