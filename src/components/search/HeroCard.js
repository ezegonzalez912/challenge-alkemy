import React, { useContext, useState } from 'react'
import { HeroesContext } from '../../context/heroes/HeroesContext'
import { ModalContext } from '../../context/modal/ModalContext';
import { types } from '../../types/types';

export const HeroCard = ({hero}) => {

    const { myTeam, dispatch } = useContext(HeroesContext);

    const {setHero, isChangeModal} = useContext(ModalContext)

    const moreStats = () => {
        isChangeModal()
        setHero(hero)
    }

    const [message, setMessage] = useState("");

    const { heroes, alignment } = myTeam;

    const addHero = () => {

        const { biography } = hero;

        if(heroes.length === 6){
            setMessage("Full team")
            return
        }
        if(myTeam.heroes.includes(hero)){
            setMessage("Hero already exists")
            return
        }
        if(biography.alignment === "bad" && alignment.bad === 3){
            setMessage("Complete bad heroes")
            return
        }
        if(biography.alignment === "good" && alignment.good === 3){
            setMessage("Complete good heroes")
            return
        }
        dispatch({type: types.add_team, payload: hero})
        setMessage("Hero added")
    }

    return (
        <div className="hero-card-search">
            <h1>{hero.name}</h1>
            <img src={hero.image.url} alt={hero.name}/>
            <button className="btn-primary" onClick={addHero} disabled={message === "" ? false : true}>
                {message === "" ? "Add my team" : message}
            </button>
            <button className="btn-secondary" onClick={moreStats}>View more</button>
        </div>
    )
}
