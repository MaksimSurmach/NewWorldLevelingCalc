
import DB from '../../../data/json/img/Resources.json'

import './reqres.scss'
interface Props {
    Ingredients: any,
    Multiplier :number
  }


export const RequiredResources = (props:Props) =>{
  //
  console.log(props);
  

  const resource = props.Ingredients?.map((item: any, index: any) => {
    const img = DB.find(x => x.Name === item.Resource.Name)
    return (
     <div>
      {item.Resource.Name} {item.Resource.Quantity} X {props.Multiplier}
      </div>
    );
  });
  return(
    
      <div>
    {resource}
    </div>
  );
}


export default RequiredResources; 

/*  */

      // function SelectItem(input: number) {
  //   var result = Object.keys(ItemToCraftJSON[input].Ingredients).map((key) => {
  //     return (
  //       <RequiredResources Ingredients={ItemToCraftJSON[input].Ingredients[key].Resource.Name} Number={ItemToCraftJSON[input].Ingredients[key].Resource.Quantity} />
  //     );
  //   });
  //   setResource(result);
  // }


  const defaulres ={"Ingredients": [
    {
        "Resource": {
            "Name": "NameResource",
            "Quantity": "QuantityResource"
        }
    }
]}