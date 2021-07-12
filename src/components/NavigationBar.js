import React, {Component} from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import styled from 'styled-components'
const Styles= styled.div`
    .navbar{
        background-color:rgba(230,0,0,0.9);
    }
    .navbar-brand ,.navbar-nav .navlink {
        color: black;
        padding: 2em
    &:hover {
        color:black;
    }
    }

`;
class NavigationBar extends Component {
    render(){
        return(
            <Styles>
        <Navbar expand="md">
            <Navbar.Brand href="/">CodeLife</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Item ><Nav.Link href="/"><strong>Home</strong></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about"><strong>About</strong></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact"><strong>Contact</strong></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
        )
    }
}
export default NavigationBar
    

