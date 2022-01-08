import { Box } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { getNotes } from "../../utils/firebase";

export const Notes = () => {
  const { user } = useContext(UserContext);
  const notes = getNotes({ userUid: user.uid });

  // console.log(982190, notes);

  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      Notes
    </Box>
  );
};
