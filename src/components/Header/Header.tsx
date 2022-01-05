import { Box, Button, Container, Typography } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import SleddingIcon from "@mui/icons-material/Sledding";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";

import { UserContext } from "../../contexts/user";
import {
  Link,
  BoxStyle,
  LogoutButtonStyle,
  LinkBoxStyle,
  LinkStyle,
} from "./Header.styles";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const auth = getAuth();
  const { setUser } = useContext(UserContext);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser({});

      console.log(98214, "signedOut");
    } catch (e) {
      console.log(982172, "error at sign out", e);
    }
  };

  return (
    <Box>
      <Container sx={BoxStyle}>
        <Box>
          <Link to="/">
            <SleddingIcon color="primary" fontSize="large" />
            <Typography variant="h6">Strong Life</Typography>
          </Link>
        </Box>
        <Button variant="contained" onClick={logout} sx={LogoutButtonStyle}>
          <Typography>logout</Typography>
          <LogoutIcon fontSize="small" />
        </Button>
      </Container>
      <Container sx={LinkBoxStyle}>
        <NavLink to="/" style={LinkStyle}>
          Home
        </NavLink>
        <NavLink to="add-note" style={LinkStyle}>
          +note
        </NavLink>
        <NavLink to="about" style={LinkStyle}>
          about
        </NavLink>
        <NavLink to="testgrounds" style={LinkStyle}>
          testgrounds
        </NavLink>
      </Container>
    </Box>
  );
};
