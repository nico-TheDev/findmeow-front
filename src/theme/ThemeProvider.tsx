interface ThemeType {
    primary: {
        light: string;
        main: string;
        dark: string;
    };
    secondary: {
        main: string;
    };
    gray: String;
    grayText: String;
}

const theme: ThemeType = {
    primary: {
        light: "#76FF03",
        main: "#64DD17",
        dark: "#8BC34A",
    },
    secondary: {
        main: "#B2FF59",
    },
    gray: "#E5E5E5",
    grayText: "rgba(0, 0, 0, 0.6)",
};

export default theme;
