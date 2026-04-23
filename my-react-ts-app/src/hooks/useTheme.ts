import { useContext } from "react";
import { ThemeContext } from "../contexts/Context";

export const useTheme = () => {
   const context = useContext(ThemeContext);
   if (context === null) {
      // Ошибка будет выброшена, если использовать хук вне провайдера
     throw new Error('useTheme должен использоваться внутри ThemeProvider');
   }

   return context; // Возвращаем гарантированно
};