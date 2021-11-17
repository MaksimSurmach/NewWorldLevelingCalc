
import "./Itemstable.scss";
import React from "react";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectRecipe } from "../../../app/slice/tradingSkillSlice";
import Divider from '@mui/material/Divider';


function ItemsTable() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const recipes = useAppSelector((state) => state.tradingSkillSlice.Recipes);
  var totalXp = useAppSelector((state) => state.tradingSkillSlice.Totalxp);

  const dispatch = useAppDispatch();

  const DisplayData = recipes.map(
    (item: any, index: any) => {
    const imgUrl:string = process.env.PUBLIC_URL + "/images/CraftedItemIcon/" + item.output.icon + ".png";
      return (
        <div>
        <ListItemButton selected={selectedIndex === index} key={index}  className="d-flex justify-content-between align-items-start" onClick={(event) =>{ 
          handleListItemClick(event, index) 
          dispatch(selectRecipe(item))
          }}>
          <ListItemAvatar>
            <Avatar alt={item.output.name} src={imgUrl} variant="square">
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.output.name} secondary={<React.Fragment>qt:{item.output.quantity} Level:{item.recipeLevel}  Exp:{item.recipeExp}</React.Fragment>} />
          <Chip label={Math.round(totalXp / item.recipeExp)} />
          
        </ListItemButton>
        <Divider variant="inset" component="li" />
        </div>
      )
    }
    )

    return (
    <div className='table_of_items '>
    <List sx={{ width: '100%',  bgcolor: 'background.paper' }} >
          {DisplayData}
    </List> 
    </div>  
  );


}

export default ItemsTable;