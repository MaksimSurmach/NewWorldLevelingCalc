import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ITradingSkill } from '../../model'

import armorImage from "../../data/img/TradeSkillsIcon/armoring_trade_skill_icon_250px.png"
import arcanaImage from "../../data/img/TradeSkillsIcon/arcana_trade_skill_icon_250px.png"
import cookingImage from "../../data/img/TradeSkillsIcon/cooking_trade_skill_icon_250px.png"
import engineeringImage from "../../data/img/TradeSkillsIcon/engineering_trade_skill_icon_250px.png"
import furnishingImage from "../../data/img/TradeSkillsIcon/furnishing_trade_skill_icon_250px.png"
import jewelcraftingImage from "../../data/img/TradeSkillsIcon/jewelcrafting_trade_skill_icon_250px.png"
import weaponsmithingImage from "../../data/img/TradeSkillsIcon/weaponsmithing_trade_skill_icon_250px.png"

interface HomeState {
    TradingSkills: ITradingSkill[]
}
const initialState = {
    TradingSkills: [{
        Id: "arcana",
        Name: "Arcana",
        ImageSrc: arcanaImage,
        CraftItemsSrc: "Arcana.json",
        LevelingSrc: "tradeskillarcana.json"
    }, {
        Id: "armor",
        Name: "Armor",
        ImageSrc: armorImage,
        CraftItemsSrc: "Armor.json",
        LevelingSrc: "tradeskillarmoring.json"
    }, {
        Id: "cooking",
        Name: "Cooking",
        ImageSrc: cookingImage,
        CraftItemsSrc: "Cooking.json",
        LevelingSrc: "tradeskillcooking.json"
    }, {
        Id: "engineering",
        Name: "Engineering",
        ImageSrc: engineeringImage,
        CraftItemsSrc: "Engineering.json",
        LevelingSrc: "tradeskillengineering.json"
    }, {
        Id: "furnishing",
        Name: "Furnishing",
        ImageSrc: furnishingImage,
        CraftItemsSrc: "Furnishing.json",
        LevelingSrc: "tradeskillfurnishing.json"
    }, {
        Id: "jewelcrafting",
        Name: "Jewelcrafting",
        ImageSrc: jewelcraftingImage,
        CraftItemsSrc: "Jewelcrafting.json",
        LevelingSrc: "tradeskilljewelcrafting.json"
    },
    {
        Id: "weaponsmithing",
        Name: "Weaponsmithing",
        ImageSrc: weaponsmithingImage,
        CraftItemsSrc: "Weaponsmithing.json",
        LevelingSrc: "tradeskillweaponsmithing.json"
    }]
} as HomeState

export const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {}
})

export const home = (state: RootState) => state.homeSlice

export default homeSlice.reducer
