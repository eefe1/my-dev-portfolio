import "../App.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function InfoPage() {
  return (
    <div className="App">
      <Box
        gap={10}
        sx={{ display: "flex", flexDirection: "column", color: "#f2f2f2" }}
      >
        <Navbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            gap={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
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
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#f2f2f2",
                  borderRadius: "50%",
                  boxShadow: "0 0 20px #fff",
                }}
              ></Box>
              <Box
                sx={{
                  fontSize: "16px",
                  letterSpacing: "0.2px",
                  lineHeight: "18px",
                  color: "#F2F2F280",
                }}
              >
                About Me
              </Box>
            </Box>
            <Box
              sx={{ fontSize: "42px", lineHeight: "110%", textAlign: "left" }}
            >
              I'm passionate about creating <br /> websites that motivates
              people.
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                outlineOffset: "-1px",
                backgroundColor: "rgba(242, 242, 242, .04)",
                borderRadius: "24px",
                outline: "1px solid rgba(242, 242, 242, .05)",
                padding: "8px",
                boxShadow: "0 40px 80px rgba(0, 0, 0, .5)",
                width: "400px",
                height: "400px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  //'linear-gradient(#035, rgba(0, 0, 0, 0))',
                  backgroundImage:
                    "radial-gradient(circle at 50% 0, rgba(255, 255, 255, .3), rgba(0, 0, 0, 0))",
                  width: "580px",
                  zIndex: "0",
                  //opacity:0,
                  top: "0%",
                  bottom: "0%",
                  left: "0%",
                  right: "0%",
                  height: "360px",
                  gridRowGap: "56px",
                  // backgroundImage:
                  // "linear-gradient(190deg, #252525, var(--background))",
                  //color: var(--on-background);
                  border: "1px solid #3d3d3d",
                  borderRadius: "16px",
                  flexDirection: "column",
                  paddingTop: "32px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  textDecoration: "none",
                  transition: "border .4s cubic-bezier(.165, .84, .44, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                test
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ bgcolor: "rgba(242, 242, 242, .1)" }} />
        <Footer />
      </Box>
    </div>
  );
}

export default InfoPage;
