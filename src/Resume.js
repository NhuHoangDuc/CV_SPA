import React,{Component} from 'react'
import Mhome from './Mhome'
import Mabout from './Mabout'
import Mcontact from './Mcontact'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Layout from './components/Layout'
import NavigationBar from './components/NavigationBar'



class Resume extends Component{
    render(){
    return(
        <div>
            <NavigationBar/>
            
            <Layout>
            <Router>
                <Switch>
                    <Route exact path="/" component={Mhome} />
                    <Route path="/about" component={Mabout} />
                    <Route path="/contact" component={Mcontact} />
                    
                </Switch>
            </Router>
            </Layout>
        </div>
    )
}
}

export default Resume