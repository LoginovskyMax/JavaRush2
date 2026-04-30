import { useEffect, useState } from "react";

function ChildrenComp({showCoordinates}:{showCoordinates: () => number[]}){
    return(
        <div><p>x:{showCoordinates()[0]}  y:{showCoordinates()[1]}</p></div>
    )
}

function MouseTracker() {
    const [coords, setCoords] = useState<number[]>([])
    const showCoordinates = () => {
        return coords
    }

    const getCoordinates = (event:MouseEvent) => {
       setCoords([ event.x, event.y ])
    }

    useEffect(() => {
        window.addEventListener('mousemove', getCoordinates)
      }, [])

    return(
        <div className="test">
           MouseTracker
           <ChildrenComp showCoordinates={showCoordinates} />
         </div>
    )
}


export default MouseTracker
