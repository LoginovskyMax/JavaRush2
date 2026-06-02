import axios from "axios"
import { useState } from "react"

function useApi<T>(){
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState<T | null>(null)

    const getData = async (url: string, params: object) => {
        setIsLoading(true)
        setError('')

         try{
          const response = await axios.get<T>(url, { params })

          await new Promise((res) => {
            setTimeout(() => res(true), 2000)
          })

          setData(response.data)

          
      } catch(err){
          const axiosErr = (err as {response: { data: string }}).response.data

          setError(axiosErr)
      } finally {
          setIsLoading(false)
      }
    }

    return {
        isLoading,
        error,
        getData,
        data
    }
}

export default useApi