import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import firebase from './../Config/firebase';
import {useHistory} from 'react-router-dom';
import { Button, Form, Spinner, Card } from 'react-bootstrap';

const Registro = ()=>{
  const history = useHistory();
  const [form, setForm] = useState({nombre:"", apellido:"", email:"", password:""});
  const [spinner, setSpinner] = useState(false);
    
  const handleSubmit = (e)=>{ //Registro desde firebase
    setSpinner(true);
      let email= form.email;
      let password = form.password;
      firebase.auth.createUserWithEmailAndPassword(email, password)
      .then((data)=>{
        console.log("Usuario creado",data.user.uid)
        firebase.db.collection("usuarios") .add({
            nombre: form.nombre,
            apellido: form.apellido,
            email: form.email,
            userId: data.user.uid
          })
          .then((data)=>{
            setSpinner(false);
              console.log(data)
              history.push("/login");
              
          })
          .catch((err)=>{
              console.log(err)
              
            })
      })
      .catch((error)=>{
          console.log("Error", error)
          alert("El mail que ingresaste ya está en uso")
              alert("Por favor, intente con otro mail")
      })
      e.preventDefault();

  }
  const handleChange = (e)=>{ //Usar la información que viene del "e" (evento)
  const target = e.target; 
  const value = target.value 
  const name = target.name;

    setForm({
      ...form,
      [name] : value}); //De esta manera llama a todos los valores del listado

    
  }
    return(
      <Card style={{ width: '30%', margin:'auto'}}>
        <Card.Body>
         <Card.Title>Welcome! Please, Sign up</Card.Title>
          <Form onSubmit={handleSubmit}>

           <Form.Group controlId="formGroupEmail">
            <Form.Label>Name/s</Form.Label>
             <Form.Control type="text" placeholder="Enter Name" name="nombre" value={form.usuario} onChange={handleChange}/>
              </Form.Group>

        <Form.Group controlId="formGroupPassword">
         <Form.Label>Surname/s</Form.Label>
          <Form.Control type="text" placeholder="Enter Surname" name="apellido" value={form.usuario} onChange={handleChange}/>
           </Form.Group>
  
       <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" name="email" value={form.usuario} onChange={handleChange}/>
          </Form.Group>

       <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange}/>
          </Form.Group>

        <Button variant="dark" type="submit">{ spinner && 
         <Spinner animation="border" variant="light" size="sm" />} 
        Sign up
          </Button>
          <br></br>
          <br></br>
          You already have an account? Then 
          <Link to={'/login'}> click here! </Link>
         </Form>      
        </Card.Body>
       </Card>
    )
  
}
export default Registro;

/*this.state = para clases
form. = para funciones */