import { createTheme } from "@mui/material";

const theme = (lang) => {
  return createTheme({
    direction: lang,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 984,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      allVariants: {
        fontFamily: lang === "rtl" ? "MikhakMedium" : "Gilroy",
        textTransform: "none",
      },
      logo: {
        fontFamily: "Gilroy-Black",
        fontSize: "32px",
        lineHeight: "37.5px",
      },
      title: {
        fontFamily: "Alice",
        fontSize: "35px",
        fontWeight: 400,
        lineHeight: "45.72px",
      },
      p: {
        fontSize: "17px",
        lineHeight: "40px",
      },
      status: {
        fontFamily: "Gilroy-SemiBold",
        fontSize: "40px",
      },
    },
    palette: {
      primary: {
        light: "#02979DB2",
        main: "#02979D",
        dark: "#024A9D",
        linear: "linear-gradient(100.35deg, #02979D 7.72%, #00888D 92.28%)",
      },
      warning: {
        main: "#EDA12F",
      },
      gray: {
        main: "#BEBEBE",
      },
      danger: {
        light: "#EDA12F",
        main: "#D74E7F",
      },
      success: {
        main: "#27C100",
      },
      secondary: {
        main: "#8F4DAE",
      },
      dark: {
        light: "#2D2D2D",
        main: "#000B0C",
      },
      light: {
        main: "#FFFFFF",
        light: "rgba(255, 255, 255, 1)",
      },
      white: {
        light: "#FAFEFE",
        main: "#fff",
      },
    },
  });
};

export default theme;
