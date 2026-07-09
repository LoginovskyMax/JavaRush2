interface IParams {
    params: Promise<{filters: string[]}>
}

export default async function Filters({ params }: IParams) {
    const { filters } = await params

    return (
        <section className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <p>Shop page</p>
            <p>filters on page = {filters.map(item => <span key={item}> {item}/</span>)}</p>
        </section>
    )
}