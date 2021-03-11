import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#FCDC84",
    200: "#7C4C74",
    300: "#642404",
    400: "#FV5C14",
    500: "#EC4494",
    600: "#2395CB",
  }
};

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const customTheme = extendTheme({ colors, breakpoints });

export default customTheme;