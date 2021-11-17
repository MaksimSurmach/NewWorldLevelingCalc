
import * as React from 'react';
import { useAppSelector } from '../../../app/hooks';

import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';

import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RecepieTree from './RecepieTree';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import './reqres.css'
import IconRarity from '../IconRarity/IconRarity';

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
        <div key={index}>

        <FormControl fullWidth>
          <InputLabel>{item.name}</InputLabel>
          <Select
            name={index.toString()}
            label={item.name}
            onChange={handleClick}
            value={resPicker[curState]}
          >
            
        {item.subIngredients.map((subitem:any, index:number)=>{
         
          return(
            <MenuItem  key={index} value={subitem} className="chooser">
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
          <ListItemButton key={index}>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <IconRarity  src={imgUrl} rarity={item.rarity} />
              </Grid>

              <Grid item xs={6}>
               <ListItemText primary={<React.Fragment>{Math.round(dataSlicer.Totalxp / selectedRecipe.recipeExp)*item.quantity}  ({item.quantity}){item.name}</React.Fragment>} > </ListItemText>
              </Grid>

            </Grid>
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
    
    <div className="center">
      <div className="itemname">
      <Grid container alignItems="left">
          <Grid item xs={1}>
            <Typography gutterBottom variant="h4" component="div">
            <IconRarity src={process.env.PUBLIC_URL + "/images/CraftedItemIcon/" +  selectedRecipe.output.icon + ".png"} rarity={selectedRecipe.output.rarity} />
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography gutterBottom variant="h4" component="div">
            {Math.round(dataSlicer.Totalxp / selectedRecipe.recipeExp)} {selectedRecipe.output.name}
            </Typography>
          </Grid>
        </Grid>
      </div>
      
      {resource}
    </div>
  );
}


export default RequiredResources; 
