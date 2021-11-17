import React from "react";
import './itemicon.css'


 function IconRarity(input:any) {
     console.log(input);
     
    let test =""
    const url = process.env.PUBLIC_URL + "/images/CraftedItemIcon/1hthrowingaxeimmolatedt4.png";


    const color:string = process.env.PUBLIC_URL + "/images/Backgrounds/itembgsquare" +test.toString() + ".png";
    const bg:string = process.env.PUBLIC_URL + "/images/Backgrounds/itemraritybgsquare" + test.toString() + ".png";
   
    return(
        <div className="main-avatar-icon">
            <img src={bg} alt="" width={test}  className="border-icon" />
            <img src={color} alt="" width={test}  className="rarity-color" />
            <img src={test} alt="" width={test}  className="image" />
        </div>
    );
}

export default IconRarity