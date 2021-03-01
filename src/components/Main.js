import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Contact from './Contact';
import '../App.css'
import Aboutme from './Aboutme';
import Projects from './Projects';
import Resume from './Resume';
import Home from './Home';


function Main(){
    return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={Aboutme}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume}/>
    </Switch>
    );

}
export default Main;