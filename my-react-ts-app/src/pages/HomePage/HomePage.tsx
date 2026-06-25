import { useState } from "react"
import CityInput from "../../components/HomePage/CityInput"
import DayInputs from "../../components/HomePage/DayInputs"
import PassengersCounter from "../../components/HomePage/PassengersCounter"
import { TripAlias } from "../../constants"
import type { CityType } from "../../types"
import { useAppDispatch } from "../../store/storeHooks"
import { setTickets } from "../../store/slices/ticketsSlice"
import { useNavigate } from "react-router-dom"


function HomePage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [passengers, setPassengers] = useState(1)
    const [trip, setTrip] = useState(TripAlias.ROUND_TRIP)
    const [departureCity, setDepartureCity] = useState<CityType>({name: '', code: ''})
    const [arrivalCity, setArrivalCity] = useState<CityType>({name: '', code: ''})
    const [depatureDay, setDepatureDay] = useState<Date | null>(null);
    const [arrivalDay, setArrivalDay] = useState<Date | null>(null);

    function getTickets() {
        const tickets = {
           passengers,
           departureCity,
           arrivalCity,
           depatureDay: depatureDay?.toLocaleString() || '',
           arrivalDay: arrivalDay?.toLocaleString() || '',
        }

       dispatch(setTickets(tickets))

       navigate('/booking-process')
    }
    return (
        <div >
          <h1>Let's Find That Ticket</h1>
          <p>Before Someone Else Does</p>
          
          <PassengersCounter
             passengers={passengers}
             setPassengers={setPassengers}
             trip={trip}
             setTrip={setTrip}
             />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
             <CityInput 
                title="Departure" 
                isActive={true}
                city={departureCity}
                setCity={setDepartureCity}
                 />
             <CityInput 
                title="Arrival" 
                isActive={trip === TripAlias.ROUND_TRIP} 
                city={arrivalCity}
                setCity={setArrivalCity}
                />
          </div>

          <DayInputs
             depatureDay={depatureDay}
             setDepatureDay={setDepatureDay}
             arrivalDay={arrivalDay}
             setArrivalDay={setArrivalDay}
             />

          <button onClick={getTickets}>Tickets please</button>
        </div>
    )
}

export default HomePage