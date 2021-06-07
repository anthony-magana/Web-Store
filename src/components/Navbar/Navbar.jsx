import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';

import logo from '../../assets/logo.png';
import useStyles from './navbarStyles';

function Navbar({totalItems}) {
    const styles = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={styles.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={styles.title} color="inherit" >
                        <img src={logo} alt="MOD ENT" height="25px" className={styles.image} />
                        MOD ENT
                    </Typography>
                    <div className={styles.grow} />
                    {location.pathname === '/' && (
                        <div className={styles.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
