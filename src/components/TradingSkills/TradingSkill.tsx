import React from "react";
import { useParams } from "react-router-dom";

import "./TradingSkill.scss";
import RecipeList from "./RecipeList/RecipeList";

import SelectedRecipe from './SelectedRecipe/SelectedRecipe'
import LevelChoser from './LevelChoser/LevelChoser';

import { CssBaseline } from "@mui/material";
import Grid from '@mui/material/Grid';

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSkill } from "../../app/slice/tradingSkillSlice";


function TradingSkill() {

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
          <RecipeList />
        </Grid>
        <Grid item xs>
          <SelectedRecipe></SelectedRecipe>
        </Grid>
        <Grid item xs>
          <LevelChoser></LevelChoser>
        </Grid>

      </Grid>

    </React.Fragment>
  );
}

export default TradingSkill;