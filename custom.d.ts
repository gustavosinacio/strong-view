import { Color } from "@mui/material";
import { ThemeProvider } from "@mui/system";

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "@mui/material/styles" {
  interface Theme extends ThemeProvider {
    colors: {
      yellow?: Color;
      red?: Color;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      yellow?: Color;
      red?: Color;
    };
  }
}
