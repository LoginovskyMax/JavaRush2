// 'use client'
// import { useParams } from "next/navigation"
interface IParams {
    params: Promise<{
        id: string
    }>
}

export default async function Character({ params }: IParams) {
    const { id } = await params

    return (
        <section className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <p>Character page</p>
            <p>Character id = {id}</p>
        </section>
    )
}