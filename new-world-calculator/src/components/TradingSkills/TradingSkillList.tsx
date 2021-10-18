import React from 'react';
import { MoqDataService } from '../../data/moq-data-service';
import TradingSkill from './TradingSkill';
import Container from 'typedi';

class TradingSkillList extends React.Component {


  MoqDataService = Container.get(MoqDataService);

  render() {
    return (
      this.MoqDataService.listTradingSkills().map(x => <TradingSkill TradingSkill={x}></TradingSkill>)
    );
  }
}

export default TradingSkillList;
