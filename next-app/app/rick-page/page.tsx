import { ICharacterResponse } from "../types"
import Character from "./Character";

export default async function RickPage() {
    const response = await fetch('https://rickandmortyapi.com/api/character?page=1')
    const data:ICharacterResponse = await response.json()

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <p>Rick Page</p>
            {data && data.results.map(item => <Character character={item} key={item.id} />)}
        </div>
    )
}