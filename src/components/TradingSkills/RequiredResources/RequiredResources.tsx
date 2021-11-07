
import * as React from 'react';
import { useAppSelector } from '../../../app/hooks';

import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RecepieTree from './RecepieTree';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import './reqres.scss'

const defaultResourceItem ={
  "type": "item",
  "itemType": "Resource",
  "id": "default",
  "name": "NAME",
  "rarity": 0,
  "icon": "ICON",
  "quantity": 1,
  "recipeId": "recipeId",
  "gsMaxBonus": 0,
  "gsMinBonus": 0,
  "qtyBonus": 0
}



export function RequiredResources() {

  const [resPicker, setresPicker] = React.useState<any>({
    0: defaultResourceItem,
    1: defaultResourceItem,
    2: defaultResourceItem,
    3: defaultResourceItem,
    4: defaultResourceItem
  });

  const handleClick = (event: SelectChangeEvent) => {
    const {name, value} = event.target
    setresPicker({
      ...resPicker,
      [name]: value,
    });
  };
  
  const selectedRecipe = useAppSelector((state) => state.tradingSkillSlice.SelectedRecipe);
  const dataSlicer = useAppSelector((state) => state.tradingSkillSlice);
  if(!selectedRecipe){
    return null;
  }
  
  let viewResource = (
    <ListItemButton>
   
    </ListItemButton>
    )

  const resource = selectedRecipe.ingredients.map((item: any,index:number) => {
    
    if (item.type === "category") {
    
  
      let curState:number =  parseInt(index.toString(), 10);

      viewResource = (
        <div>

        <FormControl fullWidth>
          <InputLabel>{item.name}</InputLabel>
          <Select
            // defaultValue={defaultResource}
            name={index.toString()}
            label={item.name}
            onChange={handleClick}
            value={resPicker[curState]}
          >
            
        {item.subIngredients.map((subitem:any, index:number)=>{
         
          return(
            <MenuItem  key={subitem} value={subitem} >
                <List >
                  <ListItem>
                    <ListItemAvatar>
                     <Avatar alt={item.name} src={process.env.PUBLIC_URL + "/images/AllResources/" + subitem.icon.toString().toLowerCase() + ".png"} variant="square" />
                    </ListItemAvatar>
                    <ListItemText primary={subitem.name} secondary={Math.round(dataSlicer.Totalxp / selectedRecipe.recipeExp) * subitem.quantity} />
                  </ListItem>
                </List>
              </MenuItem>
          )
        })}
           </Select>
        </FormControl>
        <RecepieTree recepieName={resPicker[curState]} qt={Math.round(dataSlicer.Totalxp / selectedRecipe.recipeExp) * item.quantity} />
      </div>
      )
      }
      else if (item.type === "item") {
        let iconName:string =item.icon
    
        const imgUrl:string = process.env.PUBLIC_URL + "/images/AllResources/" + iconName.toString().toLowerCase() + ".png";
       
        viewResource = (
          <ListItemButton key={item}>
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
    
    <div>
      <Avatar  src={process.env.PUBLIC_URL + "/images/CraftedItemIcon/" +  selectedRecipe.output.icon + ".png"} variant="square" />
 
      {selectedRecipe.name}
    {resource}
    </div>
  );
}


export default RequiredResources; 
