import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { HeroesContext } from "../context/heroes/HeroesContext";

export const useStatsTeam = () => {

    const { myTeam } = useContext(HeroesContext);

    const { heroes } = myTeam;

    const statPromedy = (num) => {
        if(heroes.length === 0){
            return 0
        }
        if(num === 0){
            return 0
        }
        return num / heroes.length
    }

    const [powerstats, setPowerstats] = useState({
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0
    })

    useEffect(() => {
        heroes.map(hero => {
            return {
                ...powerstats,
                intelligence: setPowerstats(statPromedy(powerstats.intelligence + parseInt(hero.powerstats.intelligence)))
            }
        })
    })

    return { powerstats };
}
