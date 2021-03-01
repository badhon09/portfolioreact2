import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class 
 extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <h1>left</h1>
                        <h>HSC</h>
                    </Cell>

                    <Cell col={8}>
                        <h1>right</h1>
                        <h6>SSC</h6>
                        
                    </Cell> 
                 </Grid>
            </div>
        )
    }
}
