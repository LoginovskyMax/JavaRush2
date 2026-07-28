'use client'
import { useSession } from "next-auth/react";
import { SignInButton, SignOutButton } from "./SignIn";
import Image from "next/image";


export default function UserBlock() {
  // auth() возвращает объект сессии или null
  const { data: session } = useSession()

    return (
        <section className="flex items-center justify-center gap-20 bg-zinc-50 font-sans dark:bg-black">
                  {session?.user ? (
                    <>
                      <p>Привет, {session.user.name}</p>
                      <Image 
                         src={session.user.image || ''} 
                         alt="user-image"
                         width='100'
                         height='100'
                         />
                      <SignOutButton />
                    </>
      ) : <>
            <p>Вы не авторизованы</p>
            <SignInButton />
          </>
  
      }
        </section>
    )
}