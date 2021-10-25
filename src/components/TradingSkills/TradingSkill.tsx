import React from "react";
import { useParams } from "react-router-dom";

import { Container as di } from 'typedi';
import { MoqDataService } from '../../data/moq-data-service';
import "./TradingSkill.scss";
import { ItemsTable } from "./ItemsTable/Itemstable";



import { useState } from "react";
import RequiredResources from './RequiredResources/RequiredResources'
import { LevelChoser } from './LevelChoser/levelChoser';


import { CssBaseline } from "@mui/material";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

export const TradingSkillComponent = () => {
  
  const data = di.get(MoqDataService);
  const param = useParams<{ id: string }>()
  const item = data.getById(param.id);

  // get items table data
  const ItemToCraftJSON = require(`../../data/json/${item?.CraftItems!}`);
  const ExpGridJSON = require(`../../data/json/${item?.Leveling!}`);
   //set data to itemtable
   const [selectedItem, setselectedItem] = useState<any>()
   
   if (selectedItem === undefined){
     setselectedItem(defaulatListItem);
   }
   const selItemFunc = (input: any):void => {
     
     
     setselectedItem(input)
   }









  //LevelExp component
   const [Multiplier, setMultiplier] = useState<number>(1)
   
   const Passingback = (input: any):void => {
    console.log(input);
    setMultiplier(input)
   }


  return (
    <React.Fragment >
    <CssBaseline></CssBaseline>
    <Grid className="TradingSkill" 
      direction="row"
      justifyContent="space-evenly"
      alignItems="stretch"
      >
        <Stack direction="row" spacing={2}>
          <ItemsTable listItems={ItemToCraftJSON} Passingback={selItemFunc}/>
          <RequiredResources Ingredients={selectedItem?.Ingredients} Multiplier={Multiplier}></RequiredResources>
          <LevelChoser lvl={[0,200]} Passingback={Passingback}></LevelChoser>
        </Stack>
      </Grid>
     
      </React.Fragment>
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