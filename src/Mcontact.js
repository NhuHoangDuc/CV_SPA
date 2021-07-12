
import React,{Component} from 'react'
import {info} from './Info'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'
import twitter from './assets/twitter.png'
import {Link} from 'react-router-dom'
import {Form, Image,Button, Container, Row, Col, Card} from 'react-bootstrap'
import st from './index.css'




class Mcontact extends Component{
    render(){
        const istyle={
            width:50,
            marginRight:30,
            marginTop:8
        }
    return(
        <Container>
            <Row  style={{height:70,marginTop:20}}>

            <Col xs={5}>
                <Card style={{width:390,height:60,backgroundColor:"rgba(0,204,68,0.9)"}}>
                    <Card.Title>
                         <h3 style={{marginTop:10,color:"black",fontFamily:"Courier, monospace"}}>Find me on social media</h3>
                    </Card.Title>
                </Card>
                </Col>
            <Col>
            
                <Link to= {{ pathname: info.facebook}} target="_blank" >
                    <Image style={istyle} src={facebook}  alt="fbpicture"/>
                </Link>
                <Link to= {{ pathname: info.instagram}} target="_blank">
                    <Image style={istyle} src={instagram}  alt="igpicture"/>
                </Link>
                <Link to= {{ pathname: info.linkedin}} target="_blank">
                    <Image style={istyle} src={linkedin}  alt="linkedinpicture"/>
                </Link>
                <Link to= {{ pathname: info.twitter}} target="_blank">
                    <Image style={istyle} src={twitter}  alt="ttpicture"/>
                </Link>
                <a href={"mailto:"+ info.gmail}>
                    <Image style={istyle} src={gmail}  alt="emailpicture"/>
                </a>
                <a href={"tel:"+ info.phonenumber}> 
                <h7 style={{color:"black"}} ><strong>Tel {info.phonenumber} </strong></h7>
                </a>
                </Col>
                </Row>
                
                <Row> 
                    <Col xs={3}></Col>  
                        <Col>
                        <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><strong>Your name</strong></Form.Label>
                        <Form.Control style={{width:500}} placeholder="Eg.James Harden" type="text" size="md"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><strong>Your email address</strong></Form.Label>
                        <Form.Control style={{width:500}} placeholder="Eg.123@yahoo.com" type="text" size="md"/>
                        <Form.Text className="text-muted">
                            I'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><strong>Your phone number</strong></Form.Label>
                        <Form.Control style={{width:500}} placeholder="Eg.123456789" type="text" size="md"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><strong>Your message</strong></Form.Label>
                        <Form.Control style={{width:500}} as="textarea" rows={3} placeholder="Say hi!!"size="md"/>
                    </Form.Group>
                    <Button variant="secondary" type="submit"onClick={()=>{alert("Thank you!!")}}>Send</Button>
                        </Form>
                        </Col>    
                            
                        </Row>
                        </Container>
              
                
            
            
            
            
               
                
                
                    
            
        
    )
}
}
export default Mcontact 