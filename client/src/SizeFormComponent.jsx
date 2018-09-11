import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const styles = () => ({
    inline: {
        display: 'inline-block',
        margin: '0 5px'
    },
    deleteIcon: {
        position: 'absolute',
        top: '5px',
        right: '5px'
    },
    labels: {
        margin: '5px 0 0 5px'
    }
});


function SizeFormComponent(
    {
        newFilename,
        size,
        index,
        disabled,
        editSize,
        removeSize,
        classes
    }) {

    return (
        <div>
            <div>
                <Typography variant="caption" className={classes.labels}>Size</Typography>

                <div>
                    <Input
                        placeholder="Width"
                        inputProps={{
                            'aria-label': 'Width',
                        }}
                        value={size.width}
                        name={`sizes[${index}][width]`}
                        disabled={disabled}
                        className={classes.inline}
                        onChange={(event) => editSize(event.target.value, 'width', index)}
                    />
                    <Typography component="span" className={classes.inline}>x</Typography>
                    <Input
                        placeholder="Height"
                        inputProps={{
                            'aria-label': 'Height',
                        }}
                        value={size.height}
                        name={`sizes[${index}][height]`}
                        disabled={disabled}
                        className={classes.inline}
                        onChange={(event) => editSize(event.target.value, 'height', index)}
                    />
                    {size.error && (
                        <p>{size.error}</p>
                    )}
                </div>


            </div>

            <div>
                <Typography variant="caption" className={classes.labels}>Filename</Typography>
                <div>
                    <Typography component="span" className={classes.inline}>{newFilename}</Typography>
                    <Input
                        placeholder="Suffix"
                        inputProps={{
                            'aria-label': 'Suffix',
                        }}
                        value={size.suffix}
                        name={`sizes[${index}][suffix]`}
                        className={classes.inline}
                        onChange={(event) => editSize(event.target.value, 'suffix', index)}
                    />
                    <Typography component="span" className={classes.inline}>.jpg</Typography>
                </div>
            </div>

            <IconButton variant="outlined" aria-label="Delete" onClick={(e) => {e.preventDefault(); removeSize(index)}} className={classes.deleteIcon}>
                <DeleteOutlinedIcon />
            </IconButton>
        </div>
    );
}

export default withStyles(styles)(SizeFormComponent);