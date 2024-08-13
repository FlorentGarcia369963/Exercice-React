export interface ITheme {
    Color:string;
}

export interface IThemeState{
    themeColor:string;
    setThemeColor:(color:string)=>void
}