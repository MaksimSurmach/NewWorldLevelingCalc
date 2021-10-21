import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import "./Itemstable.scss";

interface Props {
  Name: string;
  ItemsURL: string;
}

export const  ItemsTable = (props: Props) => {
  
  const ItemToCraftJSON =   require(`../../data/json/${props.ItemsURL}`);
 
    const DisplayData=ItemToCraftJSON.map(
      (item:any, index:any)=>{

          return(
              
              <ListGroup.Item action>
                {item.Name}  <Badge >Lvl: {item.Lvlcrafting}</Badge> 
              </ListGroup.Item>
          )
      }
  ) 
  
 
  
 
  
  

    return (
      <Stack direction="horizontal" gap={3} className='main'>
        <div className='table_of_items'>
          <ListGroup>
            {DisplayData}
          </ListGroup>
        </div>
        <div>item overview</div>
        <div>Leveling</div>
      </Stack> 
      );

      
}