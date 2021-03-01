import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Switch , Router} from 'react-router-dom';

import {Link} from 'react-router-dom';
import Main from './components/Main';
import Projects from './components/Projects';




function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
    <Layout className="abc">
        <Header className="header-color"title="Badhon" scroll>
            <Navigation className="header-color">
                <Link to="./">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                
                
            </Navigation>
        </Header>
        <Drawer className="header-color-x" title="Badhon" scroll>
            <Navigation className="header-color">
                <h1>Badhon</h1>
                <Link to="./">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
            
        </Content>
    </Layout>
</div>
     

    </div>
  );
}

export default App;
