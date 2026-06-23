import CityInput from "../../components/HomePage/CityInput"
import PassengersCounter from "../../components/HomePage/PassengersCounter"


function HomePage() {
    return (
        <div >
          <h1>Let's Find That Ticket</h1>
          <p>Before Someone Else Does</p>
          
          <PassengersCounter />

          <CityInput title="Departure" isActive={true} />
          <CityInput title="Arrival" isActive={false} />


    
        </div>
    )
}

export default HomePage