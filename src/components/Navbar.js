import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Box from "@mui/material/Box";
import NavbarToogle from "./NavbarToogle";
import EggIcon from "@mui/icons-material/Egg";
import Link from "@mui/material/Link";

export default function Navbar() {
  return (
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
        <NavbarToogle />
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
          <Box>
            <Link
              href="https://www.linkedin.com/in/ezgi-efe-60721b220/"
              color="#F2F2F2"
              underline="none"
            >
              {"LinkedIn"}
            </Link>
          </Box>
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
         {/*  <Box>Resume</Box> 
          <Box>
            <CallMadeIcon />
          </Box>*/}
        </Box>
      </Box>
    </Box>
  );
}
