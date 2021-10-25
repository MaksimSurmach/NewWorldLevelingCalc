import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


class Header extends React.Component {

    render() {
        return (
            
            <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
          >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
            <LinkContainer to="/">
              <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} >
              New World Calculator
              </Typography>
              </LinkContainer>


                <LinkContainer to="/">
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                 Trading Skills
                </Link>
                </LinkContainer>
            </Toolbar>
          </AppBar>
        );
    }
}

export default Header;