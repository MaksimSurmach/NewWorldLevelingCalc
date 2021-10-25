
import "./Itemstable.scss";
import React, { useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';


interface Props {
  listItems: any;
  Passingback: (arg: any) => void
}

export const ItemsTable:React.FC<Props> = (props: Props) => {
  const [chosenItem, setchosenItem] = useState<any>();

    function SelectItem(input: object) {
      props.Passingback(input)
    }

    

  const DisplayData = props.listItems.map(
    (item: any, index: any) => {
      return (

        <ListItemButton key={index}  className="d-flex justify-content-between align-items-start" onClick={() => { SelectItem(item) }}>

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

// <div className='table_of_items'></div>