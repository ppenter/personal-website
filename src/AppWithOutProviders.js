import { Routes, Route, Router } from "react-router-dom";
import ResponsiveAppBar from "./components/NavBar";
import { Home } from "./pages/home/index";
import { createMemoryHistory } from "history";
import { Play } from "./pages/play";
import { Box } from "@mui/system";
import { Footer } from "./components/Footer";
import { Portfolio } from "./pages/portfolio";

export default function AppWithOutProviders() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={{ width: "100%", minHeight: "85vh" }}>
        <Routes>
          <Route exact path="/dashboard" element={<Home />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}
