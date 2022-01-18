interface ThemeType {
    primary: {
        light: string;
        main: string;
        dark: string;
        green: string;
    };
    secondary: {
        main: string;
    };
    gray: String;
    grayText: String;
}

const theme: ThemeType = {
    primary: {
        light: "#FF80AB",
        main: "#F06292",
        dark: "#FF80AB",
        green: "#64DD17",
    },
    secondary: {
        main: "#FCE4EC",
    },
    gray: "#E5E5E5",
    grayText: "rgba(0, 0, 0, 0.6)",
};

export default theme;
