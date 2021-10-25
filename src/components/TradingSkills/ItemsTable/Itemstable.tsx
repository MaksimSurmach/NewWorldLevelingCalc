import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import "./Itemstable.scss";
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

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

        <ListGroup.Item key={index} action className="d-flex justify-content-between align-items-start" onClick={() => { SelectItem(item) }}>

          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.Name}</div>

          </div> <Badge >Lvl: {item.Lvlcrafting}</Badge>
        </ListGroup.Item>
      )
    }
    )

  
  return (
      <div className='table_of_items'>
        <ListGroup>
          {DisplayData}
        </ListGroup>
      </div>    
  );


}