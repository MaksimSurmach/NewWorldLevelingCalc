import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { MoqDataService } from '../../data/moq-data-service';
import { Container as di } from 'typedi';
import { LinkContainer } from 'react-router-bootstrap';

class Home extends React.Component{

  
  

  render() {
    const moq = di.get(MoqDataService);
    const data =  moq.getMeAll();
    return (
      
        <div className="body">
          
          <Row xs={1} md={4} className="g-4">
          {data.map((item, index) => (
            <Col>
            <LinkContainer to={'/skills/'+ item.Id}>
              <Card bg="dark"  text="white" >
                <Card.Img variant="top" src={item?.Image} />
                <Card.Body>
                  <Card.Title>{item?.Name}</Card.Title>
                  
                </Card.Body>
              </Card>
              </LinkContainer>
            </Col>
          ))}  
              
        </Row>
        </div>
    );
  }
}

export default Home;
