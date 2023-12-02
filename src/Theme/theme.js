import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {},
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: "#f2f2f2",
          transition: "all .2s cubic-bezier(.165, .84, .44, 1)",
          width: "80px",
          height: "36px",
          "&.Mui-selected": {
            borderRadius: "18px",
            color: "#f2f2f2",
            backgroundColor: "#F2F2F20D",
          },
          "&:hover": {
            borderRadius: "18px",
            color: "#f2f2f2",
            backgroundColor: "#F2F2F20D",
          },
        },
      },
    },
  },
});
