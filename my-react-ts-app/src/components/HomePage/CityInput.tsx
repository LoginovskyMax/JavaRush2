import { useState } from "react"
import type { CityType } from "../../types"
import { indianRailwayStations } from "../../constants/cities"

type props = {
    title: string
    isActive: boolean
    city: CityType
    setCity: React.Dispatch<React.SetStateAction<CityType>>
}


function CityInput({
    title, 
    isActive,
    city,
    setCity
}:props) {
    const [findCities, setFindCities] = useState<CityType[]>([])


   function onInput(text:string){
       const finding = indianRailwayStations.filter(city => {
          const name = city.name.toLowerCase()
          const lowText = text.toLowerCase()

          if(name.startsWith(lowText) && text) {
            return city
          }
       })

       setCity({name:text, code: ''})

       setFindCities(finding)
    }

    function onClick(city:CityType){
       setFindCities([])
       setCity(city)
    }

    return (
        <div>
         <label htmlFor={title}>{title}</label>
         <input 
           type='text' 
           id={title}
           value={city.name}
           disabled={!isActive}
           onChange={(e) => onInput(e.target.value)}
           />
        <ul>{
             findCities.map(city => 
             <li 
                key={city.code} 
                onClick={() => onClick(city)}>
                    {city.name}
             </li>)
        }</ul>
  

        </div>
    )
}

export default CityInput