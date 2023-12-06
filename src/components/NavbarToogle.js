import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../Theme/theme";
import { useHistory } from "react-router-dom";

const NavbarToogle = () => {
  const [alignment, setAlignment] = React.useState("work");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const history = useHistory();

  const NavigateInfoPage = () => {
    history.push("/InfoPage");
  };
  const NavigateHomePage = () => {
    history.push("/HomePage");
  };
  return (
    <ThemeProvider theme={Theme}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton
          value="work"
          aria-label="left aligned"
          onClick={NavigateHomePage}
        >
          Work
        </ToggleButton>
        <ToggleButton
          value="info"
          aria-label="centered"
          onClick={NavigateInfoPage}
        >
          Info
        </ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};
export default NavbarToogle;
