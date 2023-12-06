import React from "react";
import Box from "@mui/material/Box";
import EggIcon from "@mui/icons-material/Egg";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
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
        <Box>
          <EggIcon sx={{ fontSize: 70 }} />
        </Box>
        <Box>© 2023 All Rights Reserved.</Box>
      </Box>

      <Box
        gap={4}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box gap={2}>
          <Box
            sx={{
              color: "#F2F2F2",
              opacity: 0.5,
              letterSpacing: "1.5px",
              fontSize: "9px",
              fontWeight: 500,
              lineHeight: "13px",
              mb: 2,
            }}
          >
            MAIN
          </Box>
          <Box>Work</Box>
          <Box>Info</Box>
        </Box>
        <Box>
          <Box
            sx={{
              color: "#F2F2F2",
              opacity: 0.5,
              letterSpacing: "1.5px",
              fontSize: "9px",
              fontWeight: 500,
              lineHeight: "13px",
              mb: 2,
            }}
          >
            CONTACT
          </Box>
          <Box gap={2}>
            <Box>
              {" "}
              <Link
                href="https://www.linkedin.com/in/ezgi-efe-60721b220/"
                color="#F2F2F2"
                underline="none"
              >
                {"LinkedIn"}
              </Link>
            </Box>
            <Box>Resume</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
