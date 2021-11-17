import RecepieDB from "../../../data/json/Resources/ResourceRecepie.json"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from "@mui/material";
import './reqres.css'
import IconRarity from "../IconRarity/IconRarity";
function RecepieTree(recepieName:any, qt:number) {
  
    let recepie = RecepieDB.find(o => o.id === recepieName.recepieName.id);

   
    
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
                    <ListItem key={index}>
                    <Grid container spacing={2}>
                        <Grid item xs={1}>
                        <IconRarity  src={imgURL} rarity={item.rarity} />
                        </Grid>

                        <Grid item xs={6}>
                        <ListItemText primary={item.name} secondary={item.quantity * recepieName.qt} />
                        </Grid>
                    </Grid>
                  </ListItem>
                );
            })}
        
        
        </List>
    );
}

export default RecepieTree; 