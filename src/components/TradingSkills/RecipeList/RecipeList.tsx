
import "./RecipeList.scss";

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectRecipe } from "../../../app/slice/tradingSkillSlice";


function RecipeList() {

  const recipes = useAppSelector((state) => state.tradingSkillSlice.Recipes);
  const dispatch = useAppDispatch();

  const DisplayData = recipes.map(
    (item: any, index: any) => {
      return (

        <ListItemButton key={index}  className="d-flex justify-content-between align-items-start" onClick={() => dispatch(selectRecipe(item))}>
          <ListItemAvatar>
            <Avatar>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.Name} secondary={item.Lvlcrafting} />
          <Chip label={item.Exp} />
        </ListItemButton>
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

export default RecipeList;