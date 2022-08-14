import React, {useContext} from "react";

export enum Theme {
    Light = 'light',
    Dark = 'dark'

};

const defaultValue = {
    theme: Theme.Light
};

export type ThemeContextProps = {
    theme: Theme,
    onChangeTheme?: (theme: Theme) => void,
    children?: any;
}
export const ThemeContext = React.createContext<ThemeContextProps>(defaultValue);

export const useThemeContext = () => useContext(ThemeContext);



