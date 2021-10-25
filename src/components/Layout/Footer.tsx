import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'footer'}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

class Footer extends React.Component {

    render() {
        return (
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                component="footer"
                sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
                }}
                >
      <Box>
        <Container maxWidth="sm">
          <Typography variant="body1">
            
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Grid>
        );
    }
}

export default Footer;


{/* <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
                <Container fluid >
                    <Navbar.Text>Footer</Navbar.Text>
                </Container>
            </Navbar> */}