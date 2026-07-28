import { ICharacterResponse } from "../types"
import Character from "./Character";
import { revalidateTag } from 'next/cache';


export default async function RickPage() {
    const response = await fetch('https://rickandmortyapi.com/api/character?page=1', {
       cache: 'no-store'
  })
//   const response = await fetch('https://rickandmortyapi.com/api/character?page=1', {
//     next: { 
//         revalidate: 24 * 60 * 60 ,
//         tags: ['rick']
//     } // 3600 секунд = 1 час
//   });
    const data:ICharacterResponse = await response.json()

    // revalidateTag('rick', 'max')

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <p>Rick Page</p>
            {data && data.results.map(item => <Character character={item} key={item.id} />)}
        </div>
    )
}