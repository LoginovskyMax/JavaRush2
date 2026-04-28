
type PropsType = {
  name: string,
}

function ChildrenForHOC({name}:PropsType) {
    return(
        <div className="test">
            <p>ChildrenForHOC</p>
            <p>Props name: {name}</p>
         </div>
    )
}

export default ChildrenForHOC
