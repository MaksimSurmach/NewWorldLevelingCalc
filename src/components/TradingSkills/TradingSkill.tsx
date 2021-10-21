
import { useParams } from "react-router-dom";

import { Container as di } from 'typedi';
import { MoqDataService } from '../../data/moq-data-service';
import "./TradingSkill.scss";
import { ItemsTable } from "../ItemsTable/Itemstable";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const TradingSkillComponent = () => {

  const data = di.get(MoqDataService);

  const param = useParams<{ id: string }>()

  const item = data.getById(param.id);

  return (
    <Container fluid className="TradingSkill">
      <Row >
          <Col lg={8}>
          <ItemsTable Name={item?.Name!} ItemsURL={item?.CraftItems!}/>
          </Col>
        <Col lg={4}></Col>
      </Row>
      </Container>
     
    
  );
}
