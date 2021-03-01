import React, { Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import '../App.css';
import avatar from './images/avatar2.jpeg';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid col={12} className="contact-grid">
                    <Cell col={6}>
                            <h2>Badhon Kumer Ghosh</h2>
                            <img src={avatar}
                            alt=""
                            width="250px"      className=""/>
                            <p style={{width:'75%', margin:'auto',paddingTop:'1em'}}>I am badhon kumer Ghosh If you have any query
                            about me feel free to knock me . keep supporting </p>
                    </Cell>
                    <Cell col={6}>
                     <h2>Contact Me</h2>
                      <hr/>
                      <div className="contact-list">

                      <List>
  <ListItem>
    <ListItemContent style={{fontSize:'25px',fontFamily:'poppins' , fontWeight:'bold'}}>
        <i className="fa fa-phone-square" aria-hidden="true"></i> +8801766200678</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'25px',fontFamily:'poppins' , fontWeight:'bold'}}>
        <i className="fa fa-envelope-square" aria-hidden="true"></i>badhonghosh09@gmail.com</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'25px',fontFamily:'poppins' , fontWeight:'bold'}}>
        <i className="fa fa-skype" aria-hidden="true"></i>Bob Odenkirk</ListItemContent>
  </ListItem>
</List>
                      </div>
                      
                    </Cell>

                </Grid>
               
            </div>
        )
    }
}
