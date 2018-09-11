import React from 'react';

import SizesContainer from './SizesContainer';
import HtmlGeneratorContainer from "./HtmlGeneratorContainer";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
    root: {
        padding: '10px'// todo : theme unit
    },
    button: {
        width: '100%'
    }
});

function SizesComponent({
                            filename,
                            sizes,
                            addSize,
                            classes
                        }) {
    return (
        <div className={classes.root}>
            {sizes.map((size, index) =>
                <SizesContainer key={index} index={index} size={size}/>
            )}


            <Grid container justify="center" spacing={16}>
                <Grid item xs={8}>
                    <Button variant="contained" color="primary" className={classes.button} onClick={(e) => {
                        e.preventDefault();
                        addSize()
                    }} disabled={!filename}>Add a size</Button>
                </Grid>
                <Grid item xs={4}>
                    <HtmlGeneratorContainer/>
                </Grid>
            </Grid>

        </div>

    );
}

export default withStyles(styles)(SizesComponent);
