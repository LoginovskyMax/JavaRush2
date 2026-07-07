'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

type PropsType = {
  character: {
    name: string,
    id: number,
    image: string
  }
}

function Character({character}:PropsType) {
  const router = useRouter()

  const goToCharacterPage = () => {
    router.push(`/character/${character.id}`)
  }

function clickHandler(){
        console.log('clicl on me');
    }
 
return (
    <div data-testid={character.id} className="character" onClick={clickHandler}>
        <Image 
            src={character.image} 
            width={300} 
            height={300} 
            alt="character.name"
            loading="eager"
             />
        <p>ID: {character.id}</p>
        <p>Name: {character.name}</p>
    </div>
)
}

export default Character