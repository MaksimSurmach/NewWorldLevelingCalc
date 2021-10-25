
import { useParams } from "react-router-dom";

import { Container as di } from 'typedi';
import { MoqDataService } from '../../data/moq-data-service';
import "./TradingSkill.scss";
import { ItemsTable } from "./ItemsTable/Itemstable";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from "react";
import RequiredResources from './RequiredResources/RequiredResources'
import { LevelChoser } from './LevelChoser/levelChoser';


export const TradingSkillComponent = () => {

  const data = di.get(MoqDataService);
  const param = useParams<{ id: string }>()
  const item = data.getById(param.id);

  // get items table data
  const ItemToCraftJSON = require(`../../data/json/${item?.CraftItems!}`);
   //set data to itemtable
   const [selectedItem, setselectedItem] = useState<any>()
   
   if (selectedItem === undefined){
     setselectedItem(defaulatListItem);
   }
   const selItemFunc = (input: any):void => {
     console.log(input);
     
     setselectedItem(input)
   }









  //LevelExp component
   const [Multiplier, setMultiplier] = useState<number>(1)
   
   const Passingback = (input: any):void => {
    console.log(input);
    setMultiplier(input)
   }


  return (
    <Container fluid className="TradingSkill">
      <Row >
        <Col lg={4}><ItemsTable listItems={ItemToCraftJSON} Passingback={selItemFunc}/></Col>
        <Col lg={4}><RequiredResources Ingredients={selectedItem?.Ingredients} Multiplier={Multiplier}></RequiredResources></Col>
        <Col lg={4}><LevelChoser exp={Multiplier} Passingback={Passingback}></LevelChoser></Col>
      </Row>
      </Container>
     
    
  );
}

const defaulatListItem = [
  {
    "Name": "Name",
        "Lvlcrafting": "Lvlcrafting",
        "Exp": "exp",
        "MinLvl": "MinLvl",
        "MaxLvl": "MaxLvl",
        "Ingredients": [
            {
                "Resource": {
                    "Name": "NameResource",
                    "Quantity": "QuantityResource"
                }
            }
        ]
  }
]