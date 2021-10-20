import React from 'react';
import { Container, Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import { Container as di } from 'typedi';
import { MoqDataService } from '../../data/moq-data-service';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {

    MoqDataService = di.get(MoqDataService);

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container fluid >
                    <LinkContainer to="/">
                        <Navbar.Brand>New World Calculator</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <LinkContainer to="/">
                            <Button >Home</Button>
                        </LinkContainer>
                        <Nav className="me-auto">
                            <NavDropdown title="Trading Skills" id="basic-nav-dropdown">
                                {this.MoqDataService.listTradingSkills().map(x => <LinkContainer to={'/skills/'+ x.Id}><NavDropdown.Item key={x.Id}>{x.Name}</NavDropdown.Item></LinkContainer>)}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
