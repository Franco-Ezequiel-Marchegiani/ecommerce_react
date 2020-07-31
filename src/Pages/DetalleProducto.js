import React, {useState, useEffect} from 'react';
import { Navbar,  Nav, Card, ListGroup, ListGroupItem, Popover, Button, OverlayTrigger} from 'react-bootstrap';
import {Link} from "react-router-dom";
import firebase from '../Config/firebase';

const DetallePerfil = (props, id) => {


    const [datos, setDatos,] = useState ({address:""});
    useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("productos/"+id)
            .get()
            .then(doc=>{
                setDatos( doc.data() )
                console.log(doc.data() )
            })
    }, []);
    
    const popover = ( /*
      Esto es el texto del mensaje al hacer click al botón de comprar */
      <Popover id="popover-basic">
        <Popover.Title as="h3">You got me</Popover.Title>
        <Popover.Content>
          <strong>I'm almost yours</strong> To define payment methods check your email,
           we will send you all the information
        </Popover.Content>
      </Popover>
    );
    
    return(/*Acá se encuentra el header y el body */
        <div>
            <Navbar bg="light" expand="lg"> 
                       <Navbar.Brand href="/home">Libre Mercado</Navbar.Brand>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                           <Nav className="mr-auto">
                             <Nav.Link href="/home">Back to home</Nav.Link>
                            <Nav.Link href="/login">Logout</Nav.Link>
                           </Nav>
                          </Navbar.Collapse>
                         </Navbar>

                    <br></br>
                   <br></br>
                   
                  <Card style={{ margin:'auto', width: '18rem' }}>
                 <Card.Img variant="top" src={datos.foto} />
                <Card.Body>
               <Card.Title>{datos.nombre}
              </Card.Title>
             <Card.Text>
             Only at the price of:
            </Card.Text>
           </Card.Body>
          <ListGroup className="list-group-flush">
         <ListGroupItem>{datos.precio}</ListGroupItem>
        <ListGroupItem>Description {datos.descripcion}</ListGroupItem>
       <ListGroupItem>SKU: {datos.sku}</ListGroupItem>
      </ListGroup>
      If you bought the product and you don't want it, don't worry, it can be solve in your e-mail
     <Card.Body>
    <Link to={'/home'}>Back to Home</Link>  
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">Buy me</Button>
      </OverlayTrigger>
   </Card.Body>
  </Card> 
           </div> 
    )
}

export default DetallePerfil;