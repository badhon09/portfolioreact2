import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton, CardText} from 'react-mdl';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Projects extends Component {

    constructor(props){
        super(props)
        this.state={activeTab:0};
    }
toggleCategories(){
    if(this.state.activeTab==0){
        return(

          
            <div className="projects">
                  

            <div>
                
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url() center/cover'}}>React Project 1</CardTitle>
                <CardText>
                    this is a portfolio site get the full source code here
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Live Demo</Button>
                    <Button colored>Download</Button>
                </CardActions>
                
                
                </Card>
            </div>



            <div>
            <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                <CardTitle style={{color:'#fff',height:'176px',background:'url() center/cover'}}>React Project 1</CardTitle>
            <CardText>
                this is a portfolio site get the full source code here
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
                <Button colored>Download</Button>
            </CardActions>
            
            
            </Card>
        </div>
        </div>
        )
    }
    else if(this.state.activeTab==1){
        return(
            <div>
                <h1>this is Bootstrap</h1>
            </div>
        )
    }
    else if(this.state.activeTab==2){
        return(
            <div>
                <h1>this is framework</h1>
            </div>
        )
    }
}
    render() {
        return (
            
            <div className="category-tabs">
                <br></br>
                <br></br>
                <br></br>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                  <Tab className="tt">React</Tab>  
                  <Tab>Bootstrap</Tab>  
                  <Tab>C# Java Framework Projects</Tab>  
                    
                    </Tabs>
                    <section cl="projects-grid">
                        <Cell col={12}>
                          <div className="content">
                          {this.toggleCategories()}
                              </div>
                        </Cell>
                    </section>
            </div>
        )
    }
}
