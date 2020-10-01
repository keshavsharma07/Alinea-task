import React from 'react';
import { Card, Button,ListGroup, ListGroupItem ,ProgressBar,Badge} from 'react-bootstrap';
import { CardBody } from 'reactstrap';
import './Last.css';
function Last() {
    return (
    
        <div className="container">
            <div className="row">

                <div className="col ">
                    <Card className="Card" style={{ width: '21rem' }}>
                        <Card.Img variant="top" className="image" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-black-card%403x.png" />
                        <Card.Body>
                            <Card.Title className="text1">METAL</Card.Title>
                            <Card.Text className="text-center" >
                                <p className="number">2.15%<sup className="sup">1</sup> </p>
                                <p className="bad1">
                                    <Badge className="badge1" variant="success">5%</Badge> cash back
                                                    </p>
                            </Card.Text>
                            
                        </Card.Body>
                        <ListGroup variant="flush">
                                <br></br>
                  <ListGroupItem>
                      <p ><span className="bigtext">2224</span> <span className="smalltext">/2500 spots</span> <span className="endtext">276 spots left</span>  </p> 
                  <ProgressBar className="progress1" variant="success" now={82} /><br></br>
                  <div className="app"> <button className="bt btn4">Sign Up Now</button></div>
                     
                     
                     
                     </ListGroupItem>
                       
                     
                            <ListGroup.Item>
                                <Card.Text className="include">INCLUDES</Card.Text>                    
                                <Card.Body className=" body3">
                                <p><span className="fa fa-check tick1"></span> Charcoal Black Metal Card</p>
                                         <p><span className="fa fa-check tick1"></span> 2.15%<sup>1</sup> Bonus Rate Checking Account</p>
                                        <p><span className="fa fa-check tick1"></span> 5% Cash back on brands you love</p>
                                              <p><span className="fa fa-check tick1"></span> Free Cash Withdrawals</p>
                                     <p><span className="fa fa-check tick1"></span> Phone & Chat Support</p>
                                </Card.Body>
                                        <p className="body4">Fund your account with a minimum opening deposit of $1000. 3 additional free ATM withdrawals per month from out of network ATMs.</p>
                            </ListGroup.Item>
                        
                            <ListGroupItem className="listitem">                             
                              <p ><span className="fa fa-usd"></span> <span className="member1">11.99/m Membership Fee</span></p>
                        
                                <p className="endtext5">Free for 6 month</p> <p className="end2">~$72 Savings</p>
                            

                            </ListGroupItem>
                        </ListGroup>

                    </Card>
                </div>
                <div className="col offset-md  ">
                    <Card style={{ width: '21rem' }}>
                        <Card.Img variant="top" className="image" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-plus%403x.png" />
                        <Card.Body>
                            <Card.Title className="text1">PREMIUM</Card.Title>
                            <Card.Text className="text-center">
                                <p className="number1">2.15%<sup className="sup">2</sup></p>
                                <p className="bad2">
                                    <Badge className="badge1" variant="secondary">4%</Badge> cash back
                                                    </p>
                            </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <br></br>
                  <ListGroupItem> 
                  <p className="para" > <span className="smalltext">2000 spots</span> <span className="endtext1"><b>2000</b> spots left</span>  </p> 
                  <ProgressBar className="progress" animated now={0} /><br></br>
                  <div className="app"> <button className="bt btn5" disabled>Up Next</button></div></ListGroupItem>
                       
                                <ListGroup.Item>
                                <Card.Text  className="include">INCLUDES</Card.Text>                    
                                <Card.Body className=" body3">
                                <p><span className="fa fa-check"></span> Charcoal Black Metal Card</p>
                                         <p><span className="fa fa-check"></span> 2.15%<sup>1</sup> Bonus Rate Checking Account</p>
                                        <p><span className="fa fa-check"></span> 5% Cash back on brands you love</p>
                                              <p><span className="fa fa-check"></span> Free Cash Withdrawals</p>
                                     <p><span className="fa fa-check"></span> Phone & Chat Support</p>
                                </Card.Body>
                                        <p className="body4">Fund your account with a minimum opening deposit of $1000. 3 additional free ATM withdrawals per month from out of network ATMs.</p>
                            </ListGroup.Item>
                        
                            <ListGroupItem className="endcard">
                            <p ><span className="fa fa-usd icon2"></span> <span className="member2">6.99/m Membership Fee</span></p>

                            <Card.Text >
                               <p className="endtext6">Coming Soon</p> </Card.Text>

                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
                <div className="col">
                    <Card style={{ width: '21rem' }}>
                        <Card.Img variant="top" className="image" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-basic%403x.png" />
                        <Card.Body>
                            <Card.Title className="text1">BASIC</Card.Title>
                            <Card.Text className="text-center">
                                <p className="number1">2.15%<sup className="sup">3</sup></p>
                                <p className="bad2">
                                    <Badge className="badge1" variant="secondary">3%</Badge> cash back
                                                    </p>

                            </Card.Text>
                          
                        </Card.Body>
                        <ListGroup variant="flush">
                                <br></br>
                  <ListGroupItem> 
                  <p > <span className="smalltext"><b>10000</b> spots</span> <span className="endtext1"><b>10000</b> spots left</span>  </p> 
                  <ProgressBar  animated now={0}  /><br></br>
                  <div className="app"> <button className="bt btn5" disabled>Up Next</button></div></ListGroupItem>
                       
                           <ListGroup.Item>
                                <Card.Text ><p  className="include">INCLUDES</p></Card.Text>                    
                                <Card.Body className="body3">
                                <p><span className="fa fa-check"></span> Charcoal Black Metal Card</p>
                                         <p><span className="fa fa-check"></span> 2.15%<sup>1</sup> Bonus Rate Checking Account</p>
                                        <p><span className="fa fa-check"></span> 5% Cash back on brands you love</p>
                                              <p><span className="fa fa-check"></span> Free Cash Withdrawals</p>
                                     <p><span className="fa fa-check"></span> Phone & Chat Support</p>
                                </Card.Body>
                                <p className="body4">Fund your account with a minimum opening deposit of $1000. 3 additional free ATM withdrawals per month from out of network ATMs.</p>

                            </ListGroup.Item>
                        
                            <ListGroupItem className="endcard">
                              
                            <p ><span className="fa fa-usd icon2"></span> <span className="member3">No Membership Fee</span></p>
                            <Card.Text className="">
                                 <p className="endtext6">Free Forever!</p></Card.Text>

                            </ListGroupItem>
                        </ListGroup>

                    </Card>
                </div>

            </div>
            <br>
            </br>
            <br></br>
            <br></br>
        </div>
    );

}

export default Last;