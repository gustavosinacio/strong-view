import { Box, Button, Typography } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import SleddingIcon from "@mui/icons-material/Sledding";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";

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
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          "& > *:not(:first-child)": {
            marginLeft: "10px",
          },
        }}
      >
        <SleddingIcon color="primary" fontSize="large" />
        <Typography variant="h6">Strong Life</Typography>
      </Box>
      <Button
        variant="contained"
        onClick={logout}
        sx={{
          "& > *:not(:first-child)": {
            marginLeft: "4px",
          },
        }}
      >
        <Typography variant="button">logout</Typography>
        <LogoutIcon fontSize="small" />
      </Button>
    </Box>
  );
};
