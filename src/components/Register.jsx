import React,{useState} from 'react';
import { Container, Row, Col, Card, Form, Button} from "react-bootstrap";


function Register(props) {
    let [state , setState] = useState({

        user : {
            username : "",
            email: "",
            password :""
        }

    });
    let updateInput = (e) => {
     setState({
        ...state,
        user : {
            ...state.user,
            [e.target.name]  :e.target.value
        }
     })

    };
    
    let register = (e) => {

        e.preventDefault();
        console.log(state.user); 
         
    };

    return (
        <>
        {/* <pre>{JSON.stringify(state)}</pre> */}
        <Container className="=mt-3">
            <Row>
                <Col md={3}>
                 <Card>

                    <Card.Header className='p-3' style={{backgroundColor:'orange '}}>
                        Register
                    </Card.Header>
                    <Card.Body style={{backgroundColor : "pink"}}>
                         <Form> 
                           <Form.Group className="mb-3">
                                  <Form.Control 
                                  name="username" onChange={updateInput}
                                  
                                  type="text" placeholder="Username"/>

                           </Form.Group>
                           <Form.Group className="mb-3">
                                  <Form.Control 
                                  name="email" onChange={updateInput}
                                  type="email" placeholder="Email"/>

                           </Form.Group>
                           <Form.Group className="mb-3">
                                  <Form.Control 
                                  name="password" onChange={updateInput}
                                  type="password" placeholder="Password"/>
                          </Form.Group>

                          <Form.Group className="mb-3">
                                  <Button onClick={register} variant="warning" type="submit">Enter </Button>

                           </Form.Group>
                          </Form>
                    </Card.Body>
                 </Card>
                </Col>
            </Row> 
        </Container>
        </>
    );
}

export default Register;