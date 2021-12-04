interface ThemeType {
    primary:{
        light:string,
        main:string,
        dark:string
    },
    secondary:{
        main:string
    }
}

const theme:ThemeType = {
    primary: {
        light: "#76FF03",
        main: "#64DD17",
        dark: "#8BC34A",
    },
    secondary: {
        main: "#B2FF59",
    },
};

export default theme;
