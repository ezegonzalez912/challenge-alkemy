import { parseHeight, parseWeight } from "../../helpers/helpers";
import { types } from "../../types/types";

export const initialHeroes = {
    heroes: [],
    alignment: {
        bad: 0,
        good: 0 
    },
    powerstats: {
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0
    },
    appearance: {
        height: 0,
        weight: 0
    }
}

export const heroesReducer = (state, action) => {

    const {type, payload} = action;

    const { powerstats, appearance, alignment, heroes } = state;

    const { powerstats: p_powerstats} = payload; 
    const { alignment: p_alignment } = payload.biography;
    const { height, weight } = payload.appearance;

    switch(type){
        case types.add_team:
            return {
                heroes: [
                    ...heroes, 
                    payload
                ],
                alignment: {
                    bad: p_alignment === "bad" ? alignment.bad + 1 : alignment.bad,
                    good: p_alignment === "good" ? alignment.good + 1 : alignment.good,
                },
                powerstats: {
                    intelligence: powerstats.intelligence + parseInt(p_powerstats.intelligence),
                    strength: powerstats.strength + parseInt(p_powerstats.strength),
                    speed: powerstats.speed + parseInt(p_powerstats.speed),
                    durability: powerstats.durability + parseInt(p_powerstats.durability),
                    power: powerstats.power + parseInt(p_powerstats.power),
                    combat: powerstats.combat + parseInt(p_powerstats.combat)
                },
                appearance: {
                    height: appearance.height + parseHeight(height[1]),
                    weight: appearance.weight + parseWeight(weight[1])
                }
            }
        case types.remove_team:
            return {
                heroes: heroes.filter( hero => hero.id !== payload.id ),
                alignment: {
                    bad: p_alignment === "bad" ? alignment.bad - 1 : alignment.bad,
                    good: p_alignment === "good" ? alignment.good - 1 : alignment.good,
                },
                powerstats: {
                    intelligence: powerstats.intelligence - parseInt(p_powerstats.intelligence),
                    strength: powerstats.strength - parseInt(p_powerstats.strength),
                    speed: powerstats.speed - parseInt(p_powerstats.speed),
                    durability: powerstats.durability - parseInt(p_powerstats.durability),
                    power: powerstats.power - parseInt(p_powerstats.power),
                    combat: powerstats.combat - parseInt(p_powerstats.combat)
                },
                appearance: {
                    height: appearance.height - parseHeight(height[1]),
                    weight: appearance.weight - parseWeight(weight[1])
                }
            }
        default:
            return state;
    }
}