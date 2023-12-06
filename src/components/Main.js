import React from "react";
import Box from "@mui/material/Box";

export default function Main() {
  return (
    <Box
      gap={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
          width: "705px",
          height: "530px",
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
            width: "687px",
            zIndex: "0",
            //opacity:0,
            top: "0%",
            bottom: "0%",
            left: "0%",
            right: "0%",
            height: "488px",
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
  );
}
