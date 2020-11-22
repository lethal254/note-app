import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



const Header = ()=>(
    <div>
        <AppBar className="app-header" position="static">
        <Typography variant="h6">NOTES-APP</Typography>
        </AppBar>
    </div>
)
export default Header;