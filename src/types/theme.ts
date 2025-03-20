export enum ColorScheme {
  Light = "light",
  Dark = "dark",
}

export interface ThemeProps {
  theme: ColorScheme;
}

export interface ThemeToggleProps extends ThemeProps {
  toggleTheme: () => void;
}
