import { toast } from "react-toastify"
import axios from "../../utils/Axios"
import { setUser } from "../reducers/UserSlice"

export const registerUser = (details,navigate)=>async(dispatch,getState)=>{
    try {
        const data = await axios.post("/auth/signup",details)
        dispatch(setUser(data.user))
        toast.success("Registered successfully")
        navigate('/chat')
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.errors[0] && error.response.data.errors[0].msg)
    }
}

export const LoginUser = (details,navigate)=>async(dispatch,getState)=>{
    try {
        // console.log(details,"aa gyi")
        const data = await axios.post("/auth/signin",details)
        console.log(data)
        dispatch(setUser(data.user))
        toast.success("Login successfully")
        navigate('/chat')

    } catch (error) {
        console.log(error)
        toast.error(error.response.data.errors[0] && error.response.data.errors[0].msg)
        navigate("/signup")
    }
}


