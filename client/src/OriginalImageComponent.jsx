import React from 'react';

import PreviewImageContainer from './PreviewImageContainer';

import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const styles = () => ({
    input: {
        display: 'none',
    },
});

function OriginalImageComponent(
    {
        newFilename,
        loadImage,
        editFilename,
        classes
    }) {

    return (
        <div>
            <div>
                <div>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="outlined-button-file"
                        name="image"
                        onChange={(event) => loadImage(event.target.files[0])}
                        type="file"/>
                    <label htmlFor="outlined-button-file">
                        <Button variant="outlined" component="span">
                            Upload your image
                        </Button>
                    </label>
                </div>

                <PreviewImageContainer/>
            </div>

            <div>
                <div>
                    <TextField
                        id="filename"
                        label="Filename"
                        name="filename"
                        value={newFilename}
                        onChange={(event) => editFilename(event.target.value)}
                        fullWidth
                    />
                </div>
            </div>
        </div>
    );

}

export default withStyles(styles)(OriginalImageComponent);

