import "./App.css";
import Box from "@mui/material/Box";
import EggIcon from "@mui/icons-material/Egg";
import CallMadeIcon from "@mui/icons-material/CallMade";

function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex", flexDirection: "column", color: "#f2f2f2" }}>
        <Box
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <EggIcon sx={{ fontSize: 50 }} />
            </Box>
            <Box
              gap={0.5}
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  letterSpacing: "-0.5px",
                  lineHeight: "22px",
                }}
              >
                Ezgi Efe
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  letterSpacing: "0.2px",
                  lineHeight: "12px",
                  color: "#F2F2F280",
                }}
              >
                Frontend Developer
              </Box>
            </Box>
          </Box>

          <Box
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              backdropFilter: "blur(15px)",
              backgroundColor: "#F2F2F20D",
              borderRadius: "24px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderImageOutset: "0",
              borderImageRepeat: "stretch",
              borderImageSlice: "100%",
              borderImageSource: "none",
              borderImageWidth: 1,
              borderColor: "rgba(242,242,242,0.1)",
              borderShadow: "0 10px 25px rgba(0, 0, 0, .15)",
              pl: "6px",
              pr: "6px",
              width: "180px",
              height: "48px",
              transition:
                "box-shadow 1s cubic-bezier(.23, 1, .32, 1), border .6s cubic-bezier(.165, .84, .44, 1)",
            }}
          >
            <Box>Work</Box>
            <Box>Info</Box>
          </Box>

          <Box
            gap={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "flex-end",
            }}
          >
            <Box
              gap={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box>LinkedIn</Box>
              <Box>
                <CallMadeIcon />
              </Box>
            </Box>
            <Box
              gap={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box>Resume</Box>
              <Box>
                <CallMadeIcon />
              </Box>
            </Box>
          </Box>
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
              justifyContent: "space-around",
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
