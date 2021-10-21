import { Service } from "typedi";
import armorImage from "../data/img/TradeSkillsIcon/armoring_trade_skill_icon_250px.png"
import arcanaImage from "../data/img/TradeSkillsIcon/arcana_trade_skill_icon_250px.png"
import cookingImage from "../data/img/TradeSkillsIcon/cooking_trade_skill_icon_250px.png"
import engineeringImage from "../data/img/TradeSkillsIcon/engineering_trade_skill_icon_250px.png"
import furnishingImage from "../data/img/TradeSkillsIcon/furnishing_trade_skill_icon_250px.png"
import jewelcraftingImage from "../data/img/TradeSkillsIcon/jewelcrafting_trade_skill_icon_250px.png"
import weaponsmithingImage from "../data/img/TradeSkillsIcon/weaponsmithing_trade_skill_icon_250px.png"



@Service()
export class MoqDataService{

    listTradingSkills(){
        return [{
            Id: "arcana",
            Name: "Arcana",
            Image: arcanaImage,
            CraftItems: "Arcana.json",
            Leveling: "tradeskillarcana.json"
        }, {
            Id: "armor",
            Name: "Armor",
            Image: armorImage,
            CraftItems: "Armor.json",
            Leveling: "tradeskillarmoring.json"
        }, {
            Id: "cooking",
            Name: "Cooking",
            Image: cookingImage,
            CraftItems: "Cooking.json",
            Leveling: "tradeskillcooking.json"
        }, {
            Id: "engineering",
            Name: "Engineering",
            Image: engineeringImage,
            CraftItems: "Engineering.json",
            Leveling: "tradeskillengineering.json"
        }, {
            Id: "furnishing",
            Name: "Furnishing",
            Image: furnishingImage,
            CraftItems: "Furnishing.json",
            Leveling: "tradeskillfurnishing.json"
        }, {
            Id: "jewelcrafting",
            Name: "Jewelcrafting",
            Image: jewelcraftingImage,
            CraftItems: "Jewelcrafting.json",
            Leveling: "tradeskilljewelcrafting.json"
        },
        {
            Id: "weaponsmithing",
            Name: "Weaponsmithing",
            Image: weaponsmithingImage,
            CraftItems: "Weaponsmithing.json",
            Leveling: "tradeskillweaponsmithing.json"
        }];
    }

    getById(id: string) {
        return this.listTradingSkills().find(x => x.Id === id);
    }
}
