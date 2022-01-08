import { useContext, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { format } from "date-fns";

import { Box, CircularProgress, Container, Typography } from "@mui/material";

import { UserContext } from "../../contexts/user";
import { NoteData } from "../../types";
import { getNotes } from "../../utils/firebase";

export const Notes = () => {
  const { user } = useContext(UserContext);
  const [notes, setNotes] = useState<DocumentData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getFirebaseNotes = async () => {
      try {
        const firebaseNotes = await getNotes({ userUid: user.uid });
        setNotes(firebaseNotes);
      } catch (e) {
        throw e;
      } finally {
        setLoading(false);
      }
    };

    getFirebaseNotes();
  }, [user.uid]);

  const renderNote = (note: NoteData) => (
    <Container
      sx={{
        border: "1px solid #aaa",
        borderRadius: "8px",
        "&:not(:first-child)": { marginY: "20px", paddingY: "20px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          h5: {
            marginBottom: "8px",
          },
        }}
      >
        <Typography variant="h5">{note.title}</Typography>
      </Box>
      <Typography variant="body1">{note.content}</Typography>
      <Typography variant="subtitle1" color="InactiveCaptionText">
        {format(note.createdAt.toDate(), "dd/MM/yyyy - HH:mm")}
      </Typography>
    </Container>
  );

  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="warning" />
        </Box>
      ) : (
        <Box sx={{}}>
          {notes && notes.length > 0 ? (
            notes.map(renderNote)
          ) : (
            <Typography variant="h6">
              There are no notes from this user
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
