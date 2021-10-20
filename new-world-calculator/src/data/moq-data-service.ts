import { Service } from "typedi";

@Service()
export class MoqDataService{

    listTradingSkills(){
        return [{
            Id: "cooking",
            Name: "Cooking"
        }, {
            Id: "arcana",
            Name: "Arcana",
        }, {
            Id: "smelting",
            Name: "Smelting",
        }];
    }

    getById(id: string) {
        return this.listTradingSkills().find(x => x.Id === id);
    }
}
