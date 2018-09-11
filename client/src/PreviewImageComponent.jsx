import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
    image: {
        maxWidth: '100%',
        height: 'auto'
    },
    root: {
        padding: '10px', // todo : theme unit
        marginTop: '10px',
        marginBottom: '10px',
        minHeight: '200px'
    }
});

function PreviewImageComponent(
    {
        file,
        filename,
        extension,
        size,
        dimensions,
        imageLoaded,
        classes
    }) {
    return (

        <div>

            <Paper className={classes.root}>
                    <img src={file} onLoad={(event) => imageLoaded(event.target)} alt={filename} className={classes.image}/>

                {file &&
                <div>
                    {size && (
                        <Typography>Size : {size}</Typography>
                    )}

                    {filename && (
                        <Typography>Filename : {filename}</Typography>
                    )}

                    {(dimensions.width && dimensions.height) && (
                        <Typography>Dimensions : {dimensions.width} x {dimensions.height}</Typography>
                    )}
                </div>}
            </Paper>
        </div>
    )
}

export default withStyles(styles)(PreviewImageComponent);