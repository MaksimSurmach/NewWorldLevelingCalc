import React from 'react';
import { ITradingSkill } from '../../model';
import { useParams } from "react-router-dom";

export const TradingSkillComponent = () => {
	const param = useParams<{id: string}>()
    
    // location.pathname is '/users/new'
    return (
      <div className="TradingSkill">
        Trading Skill: {param.id}
      </div>
    );
}

