import React, { FC } from "react";
import { ThemeContext, ThemeContextProps } from "./themeModeContext";

export const ThemeModeProvider: FC<ThemeContextProps> = ({children, onChangeTheme, theme}) => {
    return <ThemeContext.Provider value={{ onChangeTheme, theme }}> {children} </ ThemeContext.Provider>
};