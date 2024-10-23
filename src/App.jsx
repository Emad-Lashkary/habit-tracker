import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { HabitProvider } from "./context/HabitContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <HabitProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
        </HabitProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
