import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import "./Itemstable.scss";
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import RequiredResources from '../RequiredResources/RequiredResources'
import { LevelChoser } from '../LevelChoser/levelChoser';
interface Props {
  Name: string;
  ItemsURL: string;
  LevelingURL: string;
}

export const ItemsTable:React.FC<Props> = (props: Props) => {
  const [chosenItem, setchosenItem] = useState(Array);



  const ItemToCraftJSON = require(`../../data/json/${props.ItemsURL}`);

  // function SelectItem(input: number) {
  //   var result = Object.keys(ItemToCraftJSON[input].Ingredients).map((key) => {
  //     return (
  //       <RequiredResources Ingredients={ItemToCraftJSON[input].Ingredients[key].Resource.Name} Number={ItemToCraftJSON[input].Ingredients[key].Resource.Quantity} />
  //     );
  //   });
  //   setResource(result);
  // }


    // function SelectItem(input: object) {
    //   console.log(input);
      
    //   const toExp =<LevelChoser item={input}></LevelChoser>
    //   setchosenItem(toExp);
    // }


  const DisplayData = ItemToCraftJSON.map(
    (item: any, index: any) => {
      return (

        <ListGroup.Item key={index} action className="d-flex justify-content-between align-items-start" onClick={() => {  }}>

          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.Name}</div>

          </div> <Badge >Lvl: {item.Lvlcrafting}</Badge>
        </ListGroup.Item>
      )
    }
  )

  const [parentName, setParentName] = useState<string>('1')
  const Passingback = (name: any):void => {
    setParentName(name)
  }
  return (
    <Stack direction="horizontal" gap={5} className='main'>
      <div className='table_of_items'>
        <ListGroup>
          {DisplayData}
        </ListGroup>
      </div>
      <div className='ItemDetail'>
        
       
      </div>
      <div style={{backgroundColor:'white'}}>
      <LevelChoser exp={ItemToCraftJSON[0].Exp} Passingback={Passingback}></LevelChoser>
        <div style={{color:'black'}}>{parentName}</div>
      </div>
    </Stack>
  );


}