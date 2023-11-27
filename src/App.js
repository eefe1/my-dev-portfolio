import "./App.css";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>left logo</Box>
          <Box>main navbar</Box>
          <Box>right links</Box>
        </Box>
        <Box sx={{}}>main</Box>
        <Box
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box>footer left logo</Box>
            <Box>footer left information section</Box>
          </Box>

          <Box
          gap={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent:'space-around'
            }}
          >
            <Box> footer menu1</Box>
            <Box> footer menu2</Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
