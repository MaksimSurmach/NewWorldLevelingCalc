import RecepieDB from "../../../data/json/Resources/ResourceRecepie.json"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function RecepieTree(recepieName:any, qt:number) {
  
    let recepie = RecepieDB.find(o => o.id === recepieName.recepieName.id);

    console.log(recepieName);
    
    
    return(
        <List dense={true} sx={{paddingLeft: '30px', height: '50%', bgcolor: 'background.paper' }}>
            {recepie?.ingredients.map((item:any, index:number)=>{
                let imgURL
                if(item.type === "category"){
                    imgURL = process.env.PUBLIC_URL + "/images/AllResources/" + item.subIngredients[1].icon.toString().toLowerCase() + ".png"
                }else{
                    imgURL = process.env.PUBLIC_URL + "/images/AllResources/" + item.icon.toString().toLowerCase() + ".png"
                }
                return(
                    <ListItem>
                    <ListItemAvatar>
                      <Avatar alt={item.name} src={imgURL} variant="square">
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} secondary={item.quantity * recepieName.qt} />
                  </ListItem>
                );
            })}
        
        
        </List>
    );
}

export default RecepieTree; 