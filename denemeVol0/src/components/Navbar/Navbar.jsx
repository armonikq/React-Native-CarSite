import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"
import {createTheme, ThemeProvider} from "@mui/material";
const theme = createTheme({
    palette : {
        primary : {
            main: '#a2a3ac',
        },
    },
});
export default function DenseAppBar() {
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" color="inherit" component="div" >
                        Arabam.com
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
    );
}
