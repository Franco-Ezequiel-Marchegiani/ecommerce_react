import React,{Component} from 'react';
import Productos from '../componentes/Productos';
import { Navbar,  Nav, Carousel, Col, Row, Container, Spinner, Button } from 'react-bootstrap';
import firebase from '../Config/firebase';

class Home extends Component{
    constructor(){
        super()
        this.state={
            error: null ,           
            isLoaded:false,
            compra: false,
            productos:[]
            
            
        }
        this.agregarQuitarCompra=this.agregarQuitarCompra.bind(this);
    }
    agregarQuitarCompra(prevState){ /*
      Acá se habilita el botón del home */
      this.setState(prevState => ({
        compra: !prevState.compra
      })
      )
  }

    componentDidMount (){
        firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            this.setState({
                productos:querySnapshot.docs,
                isLoaded:true
            })
        }) 
    }
    render(){  
        if(!this.state.isLoaded){
            return ( //Muestra como se carga
              <Container className="loader">

              <Spinner  animation="grow" />
              <Spinner  animation="grow" />
              <Spinner  animation="grow" />                
              </Container>
            )
        }else{
            return(  /*
              Acá ya está toda la información, el slider,
              productos y el footer que está establecido en app */
                <div>
                    <Navbar bg="light" expand="lg">
                       <Navbar.Brand href="/home">Libre Mercado</Navbar.Brand>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                           <Nav className="mr-auto">
                            <Nav.Link href="/login">Logout</Nav.Link>
                        </Nav>
                     </Navbar.Collapse>
                    </Navbar>
                  <Carousel>
                 <Carousel.Item>
    
    <img className="card border-white text-white bg-dark"
     className="mx-auto d-block"  src="../img/banner 1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Welcome to Libre Mercado</h2>
      <p>One of the first E Commerce made 100% in Argentina</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="card border-white text-white bg-dark"                            
      className="mx-auto d-block"   src="../img/banner 2.jpg" 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>We accept Credit and debit cards</h3>
      <p>We accept all the ways of pay most famous</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="card border-white text-white bg-dark"
      className="mx-auto d-block"  src="../img/banner 3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Delivery coming soon</h2>
      <p>Don't stop us now! We keep working to give you the best of us, coming soon the option of Delivery will be available</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
              
<br></br>
<br></br>
<h3>
we update our products every week
</h3> 
<h4>
if you want to know about this updates make click in the button 
</h4>
<h4>to receive a mail to know about it
 </h4>
 <br></br>
 <Button variant="outline-success" className="btn-agregar" onClick={this.agregarQuitarCompra } > {this.state.compra ? 'REFUSE' : 'ACCEPT'} </Button>
    <p className="amigo-text" > {this.state.compra ? 'Great! Our promotions will reach you by email' : "No problem, we won't bother you with it" } </p>

<br></br>   
  <Row>                               
{this.state.productos.map((doc)=><Col xs={4}  key={doc.id}><Productos datos={doc.data()} id={doc.id} /></Col>)}
</Row>  
                </div>
            )
         } 
    }
}

export default Home;