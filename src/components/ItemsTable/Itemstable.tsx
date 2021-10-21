import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import "./Itemstable.scss";

import Card from 'react-bootstrap/Card'

interface Props {
  Name: string;
  ItemsURL: string;
}

export const  ItemsTable = (props: Props) => {
  
  const ItemToCraftJSON =   require(`../../data/json/${props.ItemsURL}`);
 
    const DisplayData=ItemToCraftJSON.map(
      (item:any, index:any)=>{
       
          return(
              
              <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.Name}</div>
                   
                    </div> <Badge >Lvl: {item.Lvlcrafting}</Badge> 
              </ListGroup.Item>
          )
      }
  )  
  

    return (

      
      <Stack direction="horizontal" gap={5} className='main'>
        <div className='table_of_items'>
          <ListGroup>
            {DisplayData}
          </ListGroup>
        </div>
        <div className='ItemDetail'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>
                надо вывестю сиюда инфу с "Ingredients" - "Resource": 
         
              </Card.Text>
            </Card.Body>
            
          </Card>
        </div>
      </Stack> 
      );

      
}