import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


class Footer extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
                <Container fluid >
                    <Navbar.Text>Footer</Navbar.Text>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;
