interface IParams {
    params: Promise<{slug: string[]}>
}

export default async function Filters({ params }: IParams) {
    const { slug } = await params

    console.log(slug);

    return (
        <section className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <p>Shops page</p>
            <p>filters on page = {slug?.map(item => <span key={item}> {item}/</span>)}</p>
        </section>
    )
}