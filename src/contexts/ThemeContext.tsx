import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeValue } from '../interfaces/Context/Theme';
import { Props } from '../interfaces/General';
const ThemeContext = createContext<ThemeValue | null>(null);
const { Provider } = ThemeContext;

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState(localStorage.getItem('vm_theme') ?? "light");
    const setThemeData = (theme: string) => {
        localStorage.setItem('vm_theme', theme);
        document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
        setTheme(theme);
    }
    useEffect(() => {
        localStorage.setItem('vm_theme', theme);
        document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
    }, [theme]);
    return (
        <Provider value={{
            theme,
            setTheme: (theme: string) => setThemeData(theme)
        }}>
            {children}
        </Provider>
    );
}

export default function useTheme() {
    return useContext(ThemeContext);
}