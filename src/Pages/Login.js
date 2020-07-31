import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from './../Config/firebase';
import {useHistory} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';

class Login extends Component{
  constructor(props){
    super(props);
    console.log(this.props.title)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state={
        email:'',
      password:''
    }
  }
  handleSubmit(e){
       useHistory();
      this.props.history.push('/home');
      console.log(this.state)

      e.preventDefault();
  }


  handleSubmit(e){
    
    let email= this.state.email;
    let password = this.state.password;

    firebase.auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log("Login")
        this.props.history.push('/home');
        
    })
    .catch(error => {
        console.log("Error", error)
        alert("email and/or password is incorrect")
    });
    e.preventDefault();

  }
  handleChange(e){ //Usar la información que viene del "e" (evento)
  const target = e.target; 
  const value = target.value
  const name = target.name;

    this.setState({
      [name]:value //De esta manera llama a todos los valores del listado
    })
    e.preventDefault();
  }

  render(){
    
    return(
      <Card style={{ width: '30%', margin:'auto'}}>
       <Card.Body>
       <Card.Title>Welcome! Please login</Card.Title>
        <Form onSubmit={this.handleSubmit}>
         
         <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
           We'll never share your email with anyone else.
            </Form.Group>
      
      <Form.Group controlId="formGroupPassword">
       <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
         </Form.Group>
          <Button variant="dark" type="submit">Login</Button>
 <br></br>
 You didn't  have an account? Then
 <Link to={'/'}> click here!</Link>
  </Form>       
  </Card.Body>
  </Card>
    )
  }
}
export default withRouter(Login);