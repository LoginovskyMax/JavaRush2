// 'use client'
// import { useParams } from "next/navigation"
interface IParams {
    params: Promise<{
        id: string
    }>
}

import Image from "next/image";

async function  getData(id: number) {
       const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
       cache: 'no-store'
  })

  if (!response) {
    return { title: 'Персонаж не найден' };
  }

  const data = await response.json()
  console.log(data);

  return data
}

// Эта функция будет вызвана Next.js при построении страницы
export async function generateMetadata({ params }:{params: unknown}) {
    const { id } = await params
    const data = await getData(id)

  return {
    title: data.name,
    description: data.species,
  };
}

export default async function Character({ params }: IParams) {
    const { id } = await params

    const data = await getData(Number(id))

    return (
        <section className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <p>Character page</p>
            <p>Character id = {id}</p>
            <p>{data.name}</p>
              <p>{data.species}</p>
                      <Image 
                          src={data.image} 
                          width={300} 
                          height={300} 
                          alt="character.name"
                          loading="eager"
                           />
        </section>
    )
}