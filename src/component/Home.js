import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import fb from '../Firebase'; 
export default class Home extends Component{
	 constructor(props)
	 {
	 	super(props);
	 	this.logout = this.logout.bind(this);
	 }

	logout()
	{
       fb.auth().signOut()
       .then(()=>{
       	  this.props.history.push("/");
       })
	}
	render()
	{
		return(
			<div>
         <h1>It works</h1>
         <div class="modal-footer">

        <button type="button" className="btn btn-primary" onClick={this.logout}>LogOut</button>
      
      </div>
      </div>
			)
	}
}