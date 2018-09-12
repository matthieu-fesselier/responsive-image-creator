import React from 'react';

import OriginalImageContainer from "./OriginalImageContainer";
import SizesListContainer from "./SizesListContainer";

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#6078E9",
            dark: "#5C6FE9"
        },
        secondary: {
            main: '#ff5c67',
            dark: "#ef535f"
        },
        background: {
            default: "#6078E9"
        }
    },
});


const styles = () => ({
    gridRoot: {
        height: "100%",
        marginTop: "0",
        marginBottom: "0"
    },
    gridItem: {
        background: 'white',
        height: '100%',
        overflow: 'scroll',
        position: 'relative',
        borderRadius: '5px',
        padding: '10px' // todo : theme unit
    },
    loader: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0'
    },
    root: {
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        padding: '15px'
    }
});


function AppComponent ({
    loading,
    generateHtml,
    classes
                       }){

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>

                {loading &&
                    <LinearProgress color="secondary" className={classes.loader} />
                }

                <form id="form" className={classes.root}
                      onSubmit={(e) => { e.preventDefault(); generateHtml(new FormData(e.target)) }}>
                    <Grid container justify="center" spacing={24} className={classes.gridRoot}>
                        <Grid item sm={6} xs={12}>
                            <div className={classes.gridItem}>
                                <Typography component="h2" variant="caption" color="primary" gutterBottom>ORIGINAL
                                    IMAGE</Typography>
                                <OriginalImageContainer/>
                            </div>
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <div className={classes.gridItem}>
                                <Typography component="h2" variant="caption" color="primary" gutterBottom>GENERATED
                                    IMAGES</Typography>
                                <SizesListContainer/>
                            </div>
                        </Grid>

                    </Grid>
                </form>
            </MuiThemeProvider>
        );
}

export default withStyles(styles)(AppComponent);
