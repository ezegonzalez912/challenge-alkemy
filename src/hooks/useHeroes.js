import { useState } from "react";
import { heroesByName } from "../services/heroes"

export const useHeroes = () => {

    const [heroes, setHeroes] = useState([])
    const [load, setLoad] = useState(false)

    const getHeroesByName = (name) => {
        setLoad(true)
        heroesByName(name)
        .then(response => {
            setHeroes(response.data.results)
            setLoad(false)
        })
        .catch( () => {
            setLoad(false)
        })
    }

    return {heroes, getHeroesByName, load}
}
