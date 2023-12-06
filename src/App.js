import "./App.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Box
        gap={10}
        sx={{ display: "flex", flexDirection: "column", color: "#f2f2f2" }}
      >
        <Navbar />
        <Main />
        <Divider sx={{ bgcolor: "rgba(242, 242, 242, .1)" }} />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
