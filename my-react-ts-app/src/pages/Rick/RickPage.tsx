import { useEffect } from "react"
import Characters from "../../components/Characters/Characters"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

function RickPage() {
     const {isAuthenticated} = useAuth()
      const navigate = useNavigate()

     useEffect(() => {
        if(!isAuthenticated){
            navigate('/auth')
        }
     },[])

    return (
        <div >
          <h1>Rick page</h1>
          <Characters /> 
        </div>
    )
}

export default RickPage