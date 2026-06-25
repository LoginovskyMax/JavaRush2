import { useState } from "react"
import DateRangeCalendar from "./Calendar"

type props = {
    depatureDay: Date | null ;
    setDepatureDay:  React.Dispatch<React.SetStateAction<Date | null>>;
    arrivalDay: Date | null;
    setArrivalDay:React.Dispatch<React.SetStateAction<Date | null>>
}

function DayInputs({
    depatureDay,
    setDepatureDay,
    arrivalDay,
    setArrivalDay
}:props){

   const [isOpen, setIsOpen] = useState(false)

   function openCalendar() {
        setIsOpen(prev => !prev)
   }

     return (
        <div>
        <p>Pick your lucky day</p>
        <div className="day-inputs" style={{ display: 'flex', justifyContent: 'space-between' }}>
          
            <div className="day-inputs__input">
                <div onClick={openCalendar}>
                    <img />
                    <p>Depart</p>
                </div>
                <p>{ depatureDay ? new Date(depatureDay).toLocaleString() : ''}</p>
            </div>
          <div className="day-inputs__input" >
                <div onClick={openCalendar}>
                    <img />
                    <p>Return</p>
                </div>
                 <p>{ arrivalDay ? new Date(arrivalDay).toLocaleString() : ''}</p>
            </div>
        </div>

        {isOpen && <DateRangeCalendar
                      depatureDay={depatureDay}
                      setDepatureDay={setDepatureDay}
                      arrivalDay={arrivalDay}
                      setArrivalDay={setArrivalDay}
                        />}
        </div>

     )

}

export default DayInputs