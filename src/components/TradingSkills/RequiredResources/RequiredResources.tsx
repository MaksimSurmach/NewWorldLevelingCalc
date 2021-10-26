
import { useAppSelector } from '../../../app/hooks';

// import DB from '../../../data/json/img/Resources.json'

import './reqres.scss'


export function RequiredResources() {

  
  const selectedRecipe = useAppSelector((state) => state.tradingSkillSlice.SelectedRecipe);

  if(!selectedRecipe){
    return null;
  }
  
  const resource = selectedRecipe.Ingredients.map((item: any) => {
    // const img = DB.find(x => x.Name === item.Resource.Name)
    return (
     <div>
      {item.Resource.Name} {item.Resource.Quantity} X {1}
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
