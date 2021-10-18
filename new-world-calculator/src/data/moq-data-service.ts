import { Service } from "typedi";

@Service()
export class MoqDataService{

    listTradingSkills(){
        return [{
            Name: "Cooking", 
            Receipes: []
        }, {
            Name: "Arcana", 
            Receipes: []
        }];
    }
}