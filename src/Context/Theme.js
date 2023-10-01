import {createContext,useContext} from "react";
export const ThemeContext= createContext(
    {
        thememode: 'light',
        darktheme : ()=>{

        },
        lightthem : ()=>{

        },

    }
)
export const ThemeProvider = ThemeContext.Provider;


export default function useTheme(){
    return useContext(ThemeContext);
}