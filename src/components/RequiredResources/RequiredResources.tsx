import Stack from 'react-bootstrap/Stack'
import DB from '../../data/json/img/Resources.json'
import Figure from 'react-bootstrap/Figure'
import './reqres.scss'
interface Props {
    Ingredients: any,
    Number :number
  }


export const RequiredResources = (props:Props) =>{
  const img = DB.find(x => x.Name === props.Ingredients)
  return(
    <Stack gap={3}>
    <Figure>
      <Figure.Image
        width={50}
        alt={img?.Name}
        src={img?.URL}
      className="ImgRes"/>
      <Figure.Caption>
      {props.Ingredients} {props.Number}
      </Figure.Caption>
    </Figure>
    
    </Stack>
  );
}


export default RequiredResources; 