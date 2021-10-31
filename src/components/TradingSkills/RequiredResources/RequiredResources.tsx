
import * as React from 'react';
import { useAppSelector } from '../../../app/hooks';

import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListSubheader from '@mui/material/ListSubheader';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Avatar from '@mui/material/Avatar';
// import DB from '../../../data/json/img/Resources.json'

import './reqres.scss'


export function RequiredResources() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  const selectedRecipe = useAppSelector((state) => state.tradingSkillSlice.SelectedRecipe);
  const dataSlicer = useAppSelector((state) => state.tradingSkillSlice);
  if(!selectedRecipe){
    return null;
  }
  

  const resource = selectedRecipe.ingredients.map((item: any) => {
    // const img = DB.find(x => x.Name === item.Resource.Name)
    const imgUrl:string = process.env.PUBLIC_URL + "/images/Resources/" + item.subIngredients?.recipeId + ".png";
    //const img = "../../../data/img/Resources/" + (item.ingredients?.subIngredients?.recipeId) + ".png"
    return (
      <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <Avatar alt={item.name} src={imgUrl} variant="square" />
        </ListItemIcon>
        <ListItemText primary={<React.Fragment>{item.quantity} {item.name}   X {Math.round(dataSlicer.Totalxp / selectedRecipe.recipeExp)} </React.Fragment>} > </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      </div>
    );
  });
  return(
    
    <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        {selectedRecipe.output.name}
      </ListSubheader>
    }
  > 
    {resource}
    </List>
  );
}


export default RequiredResources; 
