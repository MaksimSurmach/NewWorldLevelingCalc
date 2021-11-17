import React from "react";
import { useParams } from "react-router-dom";

import "./TradingSkill.scss";
import ItemsTable from "./ItemsTable/Itemstable";

import RequiredResources from './RequiredResources/RequiredResources'
import LevelChoser from '../TradingSkills/LevelChoser/levelChoser';


import { CssBaseline } from "@mui/material";
import Grid from '@mui/material/Grid';

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSkill } from "../../app/slice/tradingSkillSlice";


function TradingSkillComponent() {

  const tradingSkills = useAppSelector((state) => state.homeSlice.TradingSkills);

  const dispatch = useAppDispatch();

  const param = useParams<{ id: string }>();

  const item = tradingSkills.find(x => x.Id === param.id);

  if (!item) {
    return null;
  }
  
  dispatch(selectSkill(item));

  return (
    <React.Fragment >
      <CssBaseline></CssBaseline>
      <Grid className="TradingSkill"
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs>
          <ItemsTable />
        </Grid>
        <Grid item xs>
          <RequiredResources></RequiredResources>
        </Grid>
        <Grid item xs>
          <LevelChoser></LevelChoser>
        </Grid>

      </Grid>

    </React.Fragment>
  );
}

export default TradingSkillComponent;