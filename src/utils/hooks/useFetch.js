
import { useState, useEffect, useRef } from "react"
import axios from "axios"

function useFetch(apiUrl) {
    let [data, setData] = useState({})
    let [isLoading, setLoading] = useState(true)

    let isInitialMount = useRef(true)

    useEffect(() => {
        if(isInitialMount.current){
            axios.get(apiUrl)
            .then((resp)=> {
                setData({success: resp.data})
            })
            .catch((err)=> {
                setData({error: err})
                
            })
            .finally(()=> {
                setLoading(false)
            })
            
            isInitialMount.current = false
        }
    }, [])

  return [data, isLoading]
}


export default useFetch
