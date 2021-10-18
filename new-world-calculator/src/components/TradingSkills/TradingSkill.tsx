import React from 'react';
import { ITradingSkill } from '../../model';

class TradingSkill extends React.Component<{TradingSkill: ITradingSkill}, {TradingSkill: ITradingSkill}> {

  constructor(props: {TradingSkill: ITradingSkill}) {
    super(props);
    this.state = props;

  }

  render() {
    return (
      <div className="TradingSkill">
        <div>{this.state.TradingSkill.Name}</div>
      </div>
    );
  }
}

export default TradingSkill;
