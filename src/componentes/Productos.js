import React from 'react';
import {Link} from "react-router-dom";
import {Card, ListGroup, ListGroupItem, Badge} from "react-bootstrap";

function Perfil({datos, id}){

    return(
            
    <Card style={{ margin:'auto', width: '18rem' }}>
     <Card.Img variant="top" src={datos.foto} />
      <Card.Body>
       <Card.Title>{datos.nombre} <Badge variant="secondary">New</Badge> 
        </Card.Title>
         <Card.Text>
        Only at the price of:
         </Card.Text>
          </Card.Body>
         <ListGroup className="list-group-flush">
        <ListGroupItem>{datos.precio}</ListGroupItem>
      <ListGroupItem>SKU: {datos.sku}</ListGroupItem>
     </ListGroup>
    <Card.Body>
    <Link to={'detalles/'+id}>See more</Link>  
  </Card.Body>
 </Card>
                
    )
    
}



export default Perfil;