import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
interface income{
    exp: number;
    Passingback: (arg: any) => void
}

export const LevelChoser= (props:income)  =>{
    const [CalcQt, setQt] = useState(String);
 
    // var result = Object.keys(props.item.Ingredients).map((key) => {
    //   return (
    //     <RequiredResources Ingredients={props.item.Ingredients[key].Resource.Name} Number={props.item.Ingredients[key].Resource.Quantity} />
    //   );
    // });
    let goCalc = (input:any)=>{
        input = parseInt(input)
        var res = Math.floor(input / props.exp)
        console.log(res);
        
        props.Passingback(res)
    }
    let test:number = props.exp
    
    useEffect(()=>{
        setQt(CalcQt)

        
    }, [CalcQt])
   
    
    return(
        <div>
            <Form.Control placeholder="numver" onChange={(e)=>goCalc(e.target.value)}/>
        </div>
    );
}