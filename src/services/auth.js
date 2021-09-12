export const userLogin = ({email, password}) => {

    //Simula llamada a API
    const promise = new Promise((resolve, reject) => {
        if(email === "challenge@alkemy.org" && password === "react"){
            return resolve({data: {token: "1A3svAAslosSw2"}})
        }else{
            reject(err => err)
        }
    })

    return promise
}