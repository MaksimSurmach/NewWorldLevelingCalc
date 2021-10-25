import React from 'react';

import { Container as di } from 'typedi';
import { MoqDataService } from '../../data/moq-data-service';

import { LinkContainer } from 'react-router-bootstrap';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


class Header extends React.Component {

    MoqDataService = di.get(MoqDataService);

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

// <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//                 <Container fluid >
//                     <LinkContainer to="/">
//                         <Navbar.Brand>New World Calculator</Navbar.Brand>
//                     </LinkContainer>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <LinkContainer to="/">
//                             <Button >Home</Button>
//                         </LinkContainer>
//                         <Nav className="me-auto">
//                             <NavDropdown title="Trading Skills" id="basic-nav-dropdown">
//                                 {this.MoqDataService.listTradingSkills().map(x => <LinkContainer key={x.Id} to={'/skills/'+ x.Id}><NavDropdown.Item >{x.Name}</NavDropdown.Item></LinkContainer>)}
//                             </NavDropdown>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>