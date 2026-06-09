import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/storeHooks";
import { setUser } from "../store/slices/counterSlice";
import { TOKEN, type IUser } from "../types";


export const useAuth = () => {
     const {user} = useAppSelector((state) => state.counter)
     const dispatch = useAppDispatch()



    const login = (token: string, userData: IUser) => {
        localStorage.setItem(TOKEN, token)
        dispatch(setUser(userData))
    }

    const logout = ( ) => {
        localStorage.removeItem(TOKEN)
        dispatch(setUser(null))
    }

    const getToken = () => {
         return localStorage.getItem(TOKEN)
    }

    const [isAuthenticated] = useState(getToken())

    return {
        isAuthenticated,
        login,
        logout,
        getToken
    }

}