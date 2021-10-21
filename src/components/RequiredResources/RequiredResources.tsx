import React from 'react';


interface Props {
    Ingredients: any;

  }


export const RequiredResources = (props:Props) =>{

  return(
    <p> props.Ingredients</p>
  );
}