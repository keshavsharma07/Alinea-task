import React from 'react';
import { Container, Row, Col, Image, Form, FormControl, InputGroup, Button ,Jumbotron} from 'react-bootstrap';
import './Middle.css';
function Middle() {
    return (
        <div className="App">
            <div className="row">
                <div className=" col ">
                    <Jumbotron>
                    <h1 className="header"><b>The Most Powerful Checking Account
                                            </b></h1>
                                            <br></br>
                                            
                    <h4 className="header2">Our checking account gives you higher returns <br></br>
                                    than a savings account with no hidden fees.</h4>
<br></br>
</Jumbotron>

                    <Form inline>
                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text ></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Enter Email Address"
                                aria-label="Enter Email Address"



                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Button</Button>

                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                        <br></br>
                    <div className="row">
                        <div className="col">
                        <p className="spots">
                       <img src=" https://juno-public.s3-us-west-1.amazonaws.com/Juno/createaccount-homeaddress-flag%403x.png"
                       width="30"
                       height="20"
                       ></img> 276 spots left for Priority Access</p>

                          


                        </div>
                        <div>

                        </div>
                        


                    </div>
                    <br></br>
                    <br></br>

                    <div className="row">
                        <img src="data:image/png;base64,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"
                        width="60"
                        height="30"
                        >
                        </img>
                        <pre> </pre>
                        <p className="fdic">Banking Services Provided By <br></br>
                        Evolve Bank & Trust; Member FDIC</p>
                    </div>





                </div>
                <div className=" col align-self-end" >
                    <img
                        src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-mobile-app%403x.png"
                        height="700"
                    >
                    </img>


                </div>

            </div>

            <br>
            </br>
            <br></br>
           


        </div>




    );

}

export default Middle;