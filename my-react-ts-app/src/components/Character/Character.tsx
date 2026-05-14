type PropsType = {
  character: {
    name: string,
    id: number,
    image: string
  }
}

function Character({character}:PropsType) {
 
return (
    <div className="character">
        <img src={character.image} />
        <p>ID: {character.id}</p>
        <p>Name: {character.name}</p>
    </div>
)
}

export default Character