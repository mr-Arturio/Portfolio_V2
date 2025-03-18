import { Theme } from "@/constants/enums";

export interface NavigationProps {
  toggleTheme: () => void;
  theme: Theme;
}