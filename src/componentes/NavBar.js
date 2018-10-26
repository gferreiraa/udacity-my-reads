import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Toolbar>
                <Typography variant="title" color="inherit"> My Reads </Typography>
            </Toolbar>
        </Grid>
        </AppBar>
        </div>
    )
}
export default NavBar;