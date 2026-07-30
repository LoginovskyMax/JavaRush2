import { useState } from "react"

interface IParams {
    method: string,
    body:   object
}

function useApi<T>(){
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState<T | null>(null)

    const getData = async (url: string, params?: IParams) => {
        setIsLoading(true)
        setError('')

         try{
          const response = await fetch(url, {
            method: params?.method ? params.method : 'GET',
            ...params?.body && {body: JSON.stringify(params?.body) as BodyInit}
          })
          const data = await response.json()

          await new Promise((res) => {
            setTimeout(() => res(true), 2000)
          })

          setData(data)

          
      } catch(err){
          console.log(err);
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