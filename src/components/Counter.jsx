import React, {useState} from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

let Counter = () => {

    let [state , setState] = useState({
   
   count : 0
    });
let incr = () =>{
    setState({
       count: state.count + 1 
    });
};
let decr = () =>{
    setState({
       count: state.count - 1 
    });
};

    return (
        <>
        <h1> Counter</h1>
        <Container className="=mt-3">
            <Row>
                <Col xs={4}>
                 <p> ffiyfiyfogopgvoydydyfgohzlnlnkn gvivdyigOUH guGD(HJn gaVIHBcyg0oujsjgys ggduduwh80dydkhbiyg b dbOouIYDiygob gfudtYnvu</p>
                 <Card className="shadow-lg">

                    <Card.Body>
                        <p className="display-2">{state.count} count</p>
                        <Button onClick={incr} className="m-1"> Here</Button>
                        <Button onClick={decr} variant="success" className="m-1"> Here</Button>
                    </Card.Body>
                 </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Counter; 