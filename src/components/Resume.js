import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from './images/avatar.png';
import '../App.css';
import education from './education';

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid col={12} >
                    <Cell col={4} className="resume-left">
                        <div style={{textAlign:'center'}}>
                            <img src={avatar}
                            alt="Badhon" height="200px"
                            className="avatar"/>
                        </div>
                        <h2>Badhon Kumer Ghosh</h2>
                        <h4 style={{color:'grey'}}>Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2' , width:'50%', margin:'auto'}}/>
                        <p>A personal profile, also known as a CV summary, is the opening statement of your CV. It is a short introduction which outlines your personal characteristics, telling the prospective employer what kind of a person you are, the attributes and qualities that you possess and the work experience that you have</p>
                        <hr style={{borderTop:'3px solid #833fb2' , width:'50%', margin:'auto'}}/>
                        <h5>Phone</h5>
                        <p>01766200678</p>

                        <h5>Email</h5>
                        <p>badhonghosh09@gmail.com</p>
                        <h5>Website</h5>
                        <p>badhon.me</p>
                        <hr style={{borderTop:'3px solid #833fb2' , width:'50%'}}/> 

                    </Cell>

                    <Cell col={8} className="resume-right">
                        



                    <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2012</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2014</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>





                        <education/>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}
