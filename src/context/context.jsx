// import axios from "axios";
import { createContext, useState, useEffect } from "react";
// import { BASE_URL } from "../constants/api";

export const ContextApi = createContext({})


const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // const [data, setData] = useState([])



    // async function getUsers() {
    //     setLoading(true)
    //     try {
    //         const { data } = await axios.get(BASE_URL)
    //         setData(data)
    //     } catch (error) {
    //         setError(error.message)
    //     }
    //     finally {
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     getUsers()
    // }, [])

    // const api = {
    //     getUsers,
    //     data
    // }
    const state = {
        setLoading,
        setError,
        loading,
        error
    }
    return (
        <ContextApi.Provider value={{ state }}>
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider