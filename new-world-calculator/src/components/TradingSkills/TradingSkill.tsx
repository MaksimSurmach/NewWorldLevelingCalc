import { useParams } from "react-router-dom";

import { Container as di } from 'typedi';
import { MoqDataService } from '../../data/moq-data-service';

export const TradingSkillComponent = () => {

  const data = di.get(MoqDataService);

	const param = useParams<{id: string}>()

    return (
      <div className="TradingSkill">
        Currently Selected: {data.getById(param.id)?.Name}
      </div>
    );
}
