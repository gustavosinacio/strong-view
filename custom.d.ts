import { ThemeProvider } from "@mui/system";

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "@mui/material/styles" {
  interface Theme extends ThemeProvider {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
