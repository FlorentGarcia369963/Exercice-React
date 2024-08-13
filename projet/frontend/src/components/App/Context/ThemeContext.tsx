import { createContext } from "react";
import {IThemeState} from '../../../@types/header'

export const ThemeContext = createContext<IThemeState>
({
    //valeur par défaut
    themeColor: 'light',
    setThemeColor:()=>{}
})