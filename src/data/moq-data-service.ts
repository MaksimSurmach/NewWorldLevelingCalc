import { Service } from "typedi";
import arcanaImage from "../assets/images/arcana.png"
import cookingImage from "../assets/images/cooking.png"
import smeltingImage from "../assets/images/smelting.png"



@Service()
export class MoqDataService{

    listTradingSkills(){
        return [{
            Id: "cooking",
            Name: "Cooking",
            Image: cookingImage
        }, {
            Id: "arcana",
            Name: "Arcana",
            Image: arcanaImage
        }, {
            Id: "smelting",
            Name: "Smelting",
            Image: smeltingImage
        }];
    }

    getById(id: string) {
        return this.listTradingSkills().find(x => x.Id === id);
    }
}
