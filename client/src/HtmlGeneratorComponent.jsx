import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {withStyles} from "@material-ui/core/styles/index";

const styles = () => ({
    button: {
        width: '100%',
    },
    code: {
        background: '#EEE',
        padding: '10px',
        display: 'block',
        borderRadius: '5px'
    }
});

function HtmlGeneratorComponent(
    {
        html,
        sizesLength,
        generateHtml,
        closePopup,
        classes
    }) {
    return (
        <div>

            <Dialog
                aria-labelledby="HTML Generator"
                aria-describedby="HTML Generator"
                open={html !== ''}>
                <DialogTitle>HTML Code</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <code className={classes.code}>{html}</code>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => closePopup()} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Button variant="contained" className={classes.button} onClick={(e) => {e.preventDefault(); generateHtml()} } disabled={!sizesLength}>
                Generate HTML
            </Button>
        </div>
    );

}

export default withStyles(styles)(HtmlGeneratorComponent);
