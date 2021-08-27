import { useContext, useState } from "react"
import { AuthContext } from "../context/auth/AuthContext"
import { userLogin } from "../services/auth"
import { types } from "../types/types";

export const useLogin = () => {

    const { dispatch } = useContext(AuthContext)

    const [error, setError] = useState(false)

    const handleLogin = (data) => {
        userLogin(data)
        .then( response => {
            setError(false)
            const { token } = response.data;
            dispatch({
                type: types.login,
                payload: token
            })
        })
        .catch( () => {
            setError(true)   
        })
    }

    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
    }

    return {handleLogin, handleLogout, error}
}
