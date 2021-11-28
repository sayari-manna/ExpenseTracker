import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";
import './AddNavbar.css';

export default function AddNavbar() {
    return (
        <header className="Ap-header">
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                    Expense Tracker
                </Typography>
                <Typography variant="h6" component="div" align="right" sx={{ flexGrow: 1 }}>
                        <Link to="/Add" >
                            <Button color="primary" variant="text" >Add</Button>
                        </Link>
                        <Link to="/View">
                            <Button color="secondary"variant="text">View</Button>
                        </Link>
                    <Button color="inherit">Login</Button>
                </Typography>
                </Toolbar>
            </AppBar>
            </Box>
        </header>
  );
}
