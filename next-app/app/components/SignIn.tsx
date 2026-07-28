"use client";
import { signIn, signOut } from "next-auth/react";
// Для клиентских компонентов используем хуки из "next-auth/react"

export function SignInButton() {
  return <button onClick={() => signIn()}>Войти через GitHub</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Выйти</button>;
}