
import Accordion from 'react-bootstrap/Accordion'
import Figure from 'react-bootstrap/Figure'
interface Props {
  Name: string;
  ItemsURL: string;
}

export const  ItemsTable = (props: Props) => {
  

  
  const ItemToCraftJSON =   require(`../../data/json/${props.ItemsURL}`);
    
    const DisplayData=ItemToCraftJSON.map(
      (item:any, index:any)=>{
          return(
              
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{item.Name}</Accordion.Header>
                <Accordion.Body>
                  <Figure>
                  <Figure.Image
                    width={250}
                    height={250}
                    alt={item.Name}
                    src=""
                  />
                  Экспа: {item.Exp}
                  
                </Figure>
                </Accordion.Body>
              </Accordion.Item>
          )
      }
  ) 
  
  
  
 
  
  

    return (
      


      <Accordion>
         { props.Name}
          {DisplayData}
          </Accordion>
      );

      
}