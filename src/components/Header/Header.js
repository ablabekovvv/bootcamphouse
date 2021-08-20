import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import useStyles from './styles.js';
import {Link} from "react-router-dom";

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link to="/">
        <Typography variant="h5" className={classes.title}>
          HouseVOP
        </Typography>
        </Link>
        <Box display="flex">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
        <Link to="/login" >
        <AccountCircleIcon />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
