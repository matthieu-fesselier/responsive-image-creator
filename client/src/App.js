import React, {Component} from 'react';

import OriginalImageContainer from "./OriginalImageContainer";
import SizesListContainer from "./SizesListContainer";

import './App.css';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';


const styles = () => ({
    gridItem: {
        background: 'white',
        height: '93vh',
        overflow: 'scroll',
        position: 'relative',
        borderRadius: '5px',
        padding: '10px' // todo : theme unit
    },
    root: {
        height: '100%'
    }
});


class App extends Component {

    render() {

        return (
            <div>
                <CssBaseline />

                <form>
                    <Grid container justify="center" spacing={16}>
                        <Grid item sm={6} xs={12}>
                            <div className={this.props.classes.gridItem}>
                                <Typography component="h2" variant="caption" color="primary" gutterBottom>ORIGINAL IMAGE</Typography>
                                <OriginalImageContainer/>
                            </div>
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <div className={this.props.classes.gridItem}>
                                <Typography component="h2" variant="caption" color="primary" gutterBottom>GENERATED IMAGES</Typography>
                                <SizesListContainer/>
                            </div>
                        </Grid>

                    </Grid>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(App);
