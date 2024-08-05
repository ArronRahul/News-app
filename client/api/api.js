export const base_url="http://localhost:3001"

export const CREATE=`${base_url}`

import axios from "axios"

export const userSignUp = async (Data) => {
    const {user,email,password}=Data;
    console.log("i am here at api:", Data)
    try {
        const response = await axios.post(`${base_url}/signup`, {
            user,
            email,
            password
        });
        console.log(response.data)
        return response;
    }
    catch(error){
        console.log("error")
    
        return error
    }
}

export const userLogin = async (Data) => {
    const {email,password}=Data;
    console.log("i am here at api:", Data)
    try {
        const response = await axios.post(`${base_url}/login`, {
            email,
            password
        });
        console.log(response.data)
        return response;
    }
    catch(error){
        console.log("error")
        return error
    }
}