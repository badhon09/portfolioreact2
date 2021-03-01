import React, { Component } from 'react'
import { Grid , Cell} from 'react-mdl';
import '../App.css';
import avatar from './images/avatar.png';


export default class Home extends Component {
    render() {
        return (
            <div style={{width:'100',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img className="avatar-img"
                    src={avatar}
                    />
                    <div className="banner-text">
                        
                        <h1>Full Stack Web Developer</h1>
                        
                        <hr/>
                        <p>HTML/CSS | Bootstrap | Javascript | ReactJs | NodeJs | Wordpress | MongoDB</p>
                        <div className="social-links">
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" areia-hidden="true"></i>
                            </a>
                            <a href="http://google.com" rel="noopener noreferrer">
                                <i className="fa fa-github-square" areia-hidden="true"></i>
                            </a>
                            <a href="http://google.com" rel="noopener noreferrer">
                                <i className="fa fa-github-square" areia-hidden="true"></i>
                            </a>
                            <a href="http://google.com" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" areia-hidden="true"></i>
                            </a>
                        </div>
                        
                        <div>
                            
                        </div>
                    </div>
                        
                    </Cell>
                </Grid>
               
            </div>
        )
    }
}
