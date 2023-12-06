import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../Theme/theme";
import Link from "@mui/material/Link";

const NavbarToogle = () => {
  const [alignment, setAlignment] = React.useState("work");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ThemeProvider theme={Theme}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="work" aria-label="left aligned">
          Work
        </ToggleButton>
        <ToggleButton value="info" aria-label="centered">
          Info
        </ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};
export default NavbarToogle;
