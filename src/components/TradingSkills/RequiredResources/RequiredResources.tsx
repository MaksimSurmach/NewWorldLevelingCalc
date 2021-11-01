
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
  
  let viewResource = (
    <ListItemButton>
      <ListItemIcon>
      <Avatar   variant="square" />
      </ListItemIcon>
      <ListItemText primary="item"> </ListItemText>
    </ListItemButton>
    )

  const resource = selectedRecipe.ingredients.map((item: any) => {
    let iconName:string =item.icon
    
    const imgUrl:string = process.env.PUBLIC_URL + "/images/AllResources/" + iconName.toString().toLowerCase() + ".png";
   
    
   
        
    if (item.type === "category") {
      let id:string = item.subIngredients[1].icon
      const imgCategoryUrl:string = process.env.PUBLIC_URL + "/images/AllResources/" + id.toString().toLowerCase() + ".png";
      viewResource = (
        <div>
      <ListItemButton onClick={handleClick}>
        
        <ListItemIcon>
        
        <Avatar alt={item.name} src={imgCategoryUrl} variant="square" />
        </ListItemIcon>
        <ListItemText primary={<React.Fragment> {item.name}   X {Math.round(dataSlicer.Totalxp / selectedRecipe.recipeExp)* item.quantity} </React.Fragment>} > </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {item.subIngredients.map((subitem:any)=>{


          return(
            
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <Avatar alt={item.name} src={process.env.PUBLIC_URL + "/images/AllResources/" + subitem.icon.toString().toLowerCase() + ".png"} variant="square" />
                </ListItemIcon>
                <ListItemText primary={<React.Fragment> {subitem.name}   X {Math.round(dataSlicer.Totalxp / selectedRecipe.recipeExp) * subitem.quantity} </React.Fragment>} />
              </ListItemButton>
            </List>
            
          )
        })}
           
      </Collapse>
      </div>
      )
      }
      else if (item.type === "item") {
        viewResource = (
          <ListItemButton>
       <ListItemIcon>
        <Avatar alt={item.name} src={imgUrl} variant="square" />
        </ListItemIcon>
        <ListItemText primary={<React.Fragment>{item.quantity} {item.name}   X {Math.round(dataSlicer.Totalxp / selectedRecipe.recipeExp)} </React.Fragment>} > </ListItemText>
      </ListItemButton>
        )
      }
    
    return (
      <div>
        {viewResource}
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
