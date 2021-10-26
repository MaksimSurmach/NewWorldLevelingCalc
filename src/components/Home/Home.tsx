import React from 'react';

import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useAppSelector } from '../../app/hooks';

import { LinkContainer } from 'react-router-bootstrap';

function Home() {

  const tradingSkills = useAppSelector((state) => state.homeSlice.TradingSkills)

  return (
    <React.Fragment>

      <CssBaseline />
      <Container maxWidth="xl">
        <Typography variant="h2" component="div" gutterBottom display="block" sx={{ textAlign: 'center' }}>
          Crafting Skill level calculator
        </Typography>
        <Divider></Divider>
        <Box
          sx={{
            p: 3,
            bgcolor: 'background.default',
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr 1fr 1fr 1fr 1fr 1fr' },
            gap: 2,
          }}
        >
          {tradingSkills.map((item) => (
            <Paper key={item.Id} elevation={2}>
              <LinkContainer to={'/skills/' + item.Id}>

                <Card  >
                  <CardMedia component="img" height="250" image={item.ImageSrc} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{item.Name}</Typography>

                  </CardContent>
                </Card>

              </LinkContainer>
            </Paper>
          ))}
        </Box>
      </Container>
    </React.Fragment>)
}

export default Home;
