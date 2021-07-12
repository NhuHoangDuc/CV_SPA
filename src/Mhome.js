import React,{Component} from 'react'
import  {Container, Col,Row,Image, Card,Button} from 'react-bootstrap'
import st from './index.css'
import myimage from './assets/myimage.jpg'


class Mhome extends Component{
    

    render(){
    return(
    <div>
        <Container>
            <Row>
                <Col>
                <Image style={st} src={myimage}  alt="Captain America"  roundedCircle/>
                </Col>
                <Col>
                <Card style={{border:"none",width:"20rem",height:"20rem",backgroundColor:"transparent",marginTop:70,fontSize:"17px"}}>
                    <Card.Body>
                        <Card.Title>Hello,</Card.Title>
                        <Card.Subtitle className="mb-2">I'm Kai Hoang,</Card.Subtitle>
                        <Card.Text>data science undergraduate at S P Jain School of Global Management.</Card.Text>
                        <Card.Text>  My area of expertise include Python, HTML, JavaScipt and C++.</Card.Text>
                        <Card.Text><Button size="sm" onClick={()=>{alert("Sorry, my cv is not available right now")}} >Download my cv here!</Button></Card.Text>
                    </Card.Body>


                </Card>
                </Col>
            </Row>
        </Container>
        
    
    </div>
        
            
            
            
    )
}
}
export default Mhome