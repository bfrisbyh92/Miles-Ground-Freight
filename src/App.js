import "./App.css";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";
import NavBar from "./miles-components/NavBar.jsx";
import HeroBanner from "miles-components/HeroBanner";
import Information from "miles-components/Information";
import Featuring from "miles-components/Featuring";
import Team from "miles-components/Team";
import ContactUs from "pages/LandingPages/ContactUs/index.js"
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function App() {
  let x;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <HeroBanner />
      <Information />
      <Featuring />
      <DefaultInfoCard />
      <Team />
      <ContactUs />
    </ThemeProvider>
  );
}

export default App;
