'use client'

import UserBlock from "./UserBlock"



export default function Header() {
    return (
        <section className="flex items-center justify-center gap-20 bg-zinc-50 font-sans dark:bg-black">
            <p>Main header</p>
            <UserBlock />
        </section>
    )
}