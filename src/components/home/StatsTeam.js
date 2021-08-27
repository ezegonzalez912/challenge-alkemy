import React from 'react'
import { useContext } from 'react';
import { HeroesContext } from '../../context/heroes/HeroesContext';
import { StatCircle } from './StatCircle';

export const StatsTeam = () => {

    const { myTeam } = useContext(HeroesContext)
    const { intelligence, strength, speed, durability, power, combat } = myTeam.powerstats;
    const { height, weight } = myTeam.appearance;

    const promedy = (value) => parseInt(value / myTeam.heroes.length)

    return (
        <div className="stats-team_screen">
            <h1>Stats <span className="fw-400">team</span></h1>
            <div className="stats-team_grid">
                <StatCircle property={{value: combat, name:"Combat"}}/>
                <StatCircle property={{value: durability, name:"Durability"}}/>
                <StatCircle property={{value: intelligence, name:"Intelligence"}}/>
                <StatCircle property={{value: power, name:"Power"}}/>
                <StatCircle property={{value: speed, name:"Speed"}}/>
                <StatCircle property={{value: strength, name:"Strength"}}/>
                <div className="progress-circle_container">
                    <p>Height promedy</p>
                    <h2 className="c-primary">{promedy(height) ? promedy(height) : 0} cm</h2>
                    <p>Weight promedy</p>
                    <h2 className="c-primary">{promedy(weight) ? promedy(weight) : 0} kg</h2>
                </div>
            </div>
        </div>
    )
}
