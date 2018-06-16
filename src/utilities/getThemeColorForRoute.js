import {
  portfolioThemColor,
  skillsThemeColor,
  connectThemeColor,
  aboutThemeColor
} from "../constants/colors";

export default function getThemeColorForRoute(pathname) {
  switch (pathname) {
    case "/connect":
      return connectThemeColor;
    case "/about":
      return aboutThemeColor;
    case "/skills":
      return skillsThemeColor;
    case "/portfolio":
      return portfolioThemColor;
    default:
      return "#ababab";
  }
}
