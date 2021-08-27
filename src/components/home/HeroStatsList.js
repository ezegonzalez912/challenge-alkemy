import React from 'react'
import { Line } from 'rc-progress';

export const HeroStatsList = ({powerstats}) => {

    const {combat, durability, intelligence, power, speed, strength} = powerstats;

    return (
        <div className="hero-stats-list">
            <div className="hero-stats-list_item" title={combat}>
                <p>Combat</p>
                <Line percent={combat} strokeWidth="10" trailWidth="10" strokeColor="#4C22B0" />
            </div>
            <div className="hero-stats-list_item" title={durability}>
                <p>Durability</p>
                <Line percent={durability} strokeWidth="10" trailWidth="10" strokeColor="#4C22B0" />
            </div>
            <div className="hero-stats-list_item" title={intelligence}>
                <p>Intelligence</p>
                <Line percent={intelligence} strokeWidth="10" trailWidth="10" strokeColor="#4C22B0" />
            </div>
            <div className="hero-stats-list_item" title={power}>
                <p>Power</p>
                <Line percent={power} strokeWidth="10" trailWidth="10" strokeColor="#4C22B0" />
            </div>
            <div className="hero-stats-list_item" title={speed}>
                <p>Speed</p>
                <Line percent={speed} strokeWidth="10" trailWidth="10" strokeColor="#4C22B0" />
            </div>
            <div className="hero-stats-list_item" title={strength}>
                <p>Strength</p>
                <Line percent={strength} strokeWidth="10" trailWidth="10" strokeColor="#4C22B0" />
            </div>
        </div>
    )
}
