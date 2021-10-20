import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { Container as di } from 'typedi';
import { MoqDataService } from '../../data/moq-data-service';
import "./TradingSkill.scss";

export const TradingSkillComponent = () => {

  const data = di.get(MoqDataService);

  const param = useParams<{ id: string }>()

  const item = data.getById(param.id);

  return (
    <div className="TradingSkill">
      <Card>
        <Card.Body>
          <Card.Title>{item?.Name}</Card.Title>
          <Card.Img variant="bottom" src={item?.Image} />
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
