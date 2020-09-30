import React from 'react';
import { Card, Button,ListGroup, ListGroupItem ,ProgressBar} from 'react-bootstrap';
import './Last.css';
function Last() {
    return (
        <div className="container">
            <div className="row">

                <div className="col align-self-start">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="image" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-black-card%403x.png" />
                        <Card.Body>
                            <Card.Title className="text-center">METAL</Card.Title>
                            <Card.Text className="text-center" >
                                <h2 className="number1">2.15% </h2>
                            </Card.Text>
                            
                        </Card.Body>
                        <ListGroup variant="flush">
                                <br></br>
                  <ListGroupItem>
                      <p ><span className="bigtext">2224</span> <span className="smalltext">/2500 spots</span> <span className="endtext">276 spots left</span>  </p> 
                  <ProgressBar className="progress1" variant="success" now={45} /><br></br>
                       <p className="text-center" >  <button className="btn btn-primary">
                           
                           Sign Up Now  
                           
                           </button></p></ListGroupItem>
                       
                     
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>

                    </Card>
                </div>
                <div className="col offset-md  ">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="image" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-plus%403x.png" />
                        <Card.Body>
                            <Card.Title className="text-center">PREMIUM</Card.Title>
                            <Card.Text className="text-center">
                                <h2 className="number1">2.15% </h2>
                            </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <br></br>
                  <ListGroupItem> 
                  <p className="para" > <span className="smalltext">2000 spots</span> <span className="endtext1"><b>2000</b> spots left</span>  </p> 
                  <ProgressBar className="progress" animated now={0} /><br></br>
                       <p className="text-center" >  <button className="btn btn-light"> Up Next</button></p></ListGroupItem>
                       
                     
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div className="col">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="image" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-basic%403x.png" />
                        <Card.Body>
                            <Card.Title className="text-center">BASIC</Card.Title>
                            <Card.Text className="text-center">
                                <h2 className="number1">2.15% </h2>

                            </Card.Text>
                          
                        </Card.Body>
                        <ListGroup variant="flush">
                                <br></br>
                  <ListGroupItem> 
                  <p > <span className="smalltext"><b>10000</b> spots</span> <span className="endtext1"><b>10000</b> spots left</span>  </p> 
                  <ProgressBar  animated now={0}  /><br></br>
                       <p className="text-center" >  <button className="btn btn-light">
                           
                           Sign Up Now  
                           
                           </button></p></ListGroupItem>
                       
                     
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>

                    </Card>
                </div>

            </div>
            <br>
            </br>
            <br></br>
        </div>
    );

}

export default Last;