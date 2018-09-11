import React from 'react';
import SizeFormContainer from "./SizeFormContainer";

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
    inline: {
        display: 'inline-block'
    },
    root: {
        padding: '10px', // todo : theme unit
        marginBottom: '10px',
        position: 'relative'
    },

});

function SizesComponent(
    {
        size,
        index,
        addHighRes,
        classes
    }) {

    return (
        <Paper className={classes.root} key={index}>

            <SizeFormContainer index={index} size={size}/>

            {size.a2x.active && (
                <SizeFormContainer index={`${index}-2x`} size={size.a2x} disabled={true}/>
            )}

            {size.a3x.active && (
                <SizeFormContainer index={`${index}-3x`} size={size.a3x} disabled={true}/>
            )}

            {/* <Button variant="outlined" onClick={(e) => {
                e.preventDefault();
                addHighRes(index, 2)
            }}>@2x</Button>
            <Button variant="outlined" onClick={(e) => {
                e.preventDefault();
                addHighRes(index, 3)
            }}>@3x</Button> */}
        </Paper>
    );
}

export default withStyles(styles)(SizesComponent);
