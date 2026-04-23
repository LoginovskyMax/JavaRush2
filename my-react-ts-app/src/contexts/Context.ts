import { createContext } from "react"

export type Theme = 'light' | 'dark'

interface IThemeContext {
  theme: Theme,
  changeTheme: () => void
}

export const ThemeContext = createContext<IThemeContext | null>(null)