import React from "react";
import './itemicon.css'


 function IconRarity(input:any) {

    let Rarity;
    if (input.rarity) {
        Rarity = input.rarity
    }else Rarity = 0
   
    let widthImg;
    if (input.width) {
        widthImg = input.width
    }else widthImg = 50

    const color:string = process.env.PUBLIC_URL + "/images/Backgrounds/itembgsquare" + Rarity.toString() + ".png";
    const bg:string = process.env.PUBLIC_URL + "/images/Backgrounds/itemraritybgsquare" + Rarity.toString() + ".png";
   
    return(
        <div className="main-avatar-icon">
            <img src={color} alt="" width={widthImg}  className="rarity-color" />
            <img src={bg} alt="" width={widthImg}  className="border-icon" />
            
            <img src={input.src} alt="" width={widthImg}  className="image" />
        </div>
    );
}

export default IconRarity