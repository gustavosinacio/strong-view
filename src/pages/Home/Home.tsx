import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  Box,
  AlertColor,
} from "@mui/material";
import { ReactElement, useContext, useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { Container } from "./Home.styles";
import { UserContext } from "../../contexts/user";
import { SnackbarErrorSuccess } from "../../components/SnackbarErrorSuccess";

export const Home = (): ReactElement => {
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const [snackTitle, setSnackTitle] = useState("");
  const [snackMessage, setSnackMessage] = useState("");
  const [snackType, setSnackType] = useState<AlertColor>();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const addNoteFirebase = async () => {
    const firestore = getFirestore();

    try {
      const docRef = await addDoc(
        collection(firestore, "users", user.uid || "", "notes"),
        {
          title,
          content,
          createdAt: new Date(),
        }
      );

      setTitle("");
      setContent("");
      setSnackTitle("Sucesso");
      setSnackMessage("Nota adicionada com sucesso");
      setSnackType("success");
      setOpen(true);

      console.log("Document written with ID: ", docRef);
    } catch (e: any) {
      setSnackTitle(e.name);
      setSnackMessage(e.message);
      setError(e.message);
      setSnackType("error");
      setOpen(true);
      console.log("Error adding document: ", e.name);
      console.log("Error adding document: ", e.message);
    }
  };

  const handleChange = (event: any) => {
    const { id, value } = event.target;

    switch (id) {
      case "input-title": {
        setTitle(value);
        break;
      }

      case "input-content": {
        setContent(value);
        break;
      }
    }
  };

  return (
    <Container>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <FormControl margin="dense" variant="standard" error={error !== ""}>
          <TextField
            id="input-title"
            label="Título"
            value={title}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl margin="dense" variant="filled" error={error !== ""}>
          <InputLabel htmlFor="input-content" />
          <TextField
            id="input-content"
            variant="outlined"
            placeholder="Conteúdo da nota"
            multiline
            maxRows={18}
            value={content}
            onChange={handleChange}
          />
        </FormControl>
      </Box>

      <Box>
        <Button variant="contained" onClick={addNoteFirebase}>
          add note
        </Button>
      </Box>

      <SnackbarErrorSuccess
        message={snackMessage}
        title={snackTitle}
        type={snackType}
        open={open}
        handleClose={handleClose}
      />
    </Container>
  );
};
