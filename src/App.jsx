import { ColorModeContext, useMode } from "./Hooks/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar";
import SideNavbar from "./Components/SideNavbar";
import Dashboard from "./Pages/Dashboard";
import Database from "./Pages/Database";
import Geography from "./Pages/Geography";
import Reports from "./Pages/Reports";
import Calendar from "./Pages/Calendar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode(); 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideNavbar />
          <main className="content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/database" element={<Database />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} /> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App