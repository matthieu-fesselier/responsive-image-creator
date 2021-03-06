import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    },
    progress: {
        marginRight: '10px'
    }
});

function HtmlGeneratorComponent(
    {
        html,
        loading,
        generated,
        sizesLength,
        generateHtml,
        closePopup,
        copyToClipboard,
        classes
    }) {
    return (
        <div>

            <Dialog
                aria-labelledby="HTML Generator"
                aria-describedby="HTML Generator"
                open={generated}>
                <DialogTitle>👌 Your download has started</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography gutterBottom>Please find the corresponding HTML snippet below:</Typography>
                        <code className={classes.code}>{html}</code>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => closePopup()} color="primary">
                        Close
                    </Button>
                    <Button onClick={() => copyToClipboard()} variant="contained" color="primary">
                        Copy to clipboard
                    </Button>
                </DialogActions>
            </Dialog>

            <Button variant="contained" color="primary" type="submit" className={classes.button} disabled={!sizesLength || loading}>
                Generate my images
            </Button>
        </div>
    );

}

export default withStyles(styles)(HtmlGeneratorComponent);