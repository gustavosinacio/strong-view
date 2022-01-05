import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  Box,
  AlertColor,
} from "@mui/material";
import { ReactElement, useContext, useState } from "react";
import { Container } from "./AddNote.styles";
import { UserContext } from "../../contexts/user";
import { SnackbarErrorSuccess } from "../../components/SnackbarErrorSuccess";
import { addUserNote, removeUserTestData } from "../../utils/firebase";

export const AddNote = (): ReactElement => {
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState({
    addNote: false,
    removeData: false,
  });

  const [snackTitle, setSnackTitle] = useState("");
  const [snackMessage, setSnackMessage] = useState("");
  const [snackType, setSnackType] = useState<AlertColor>();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const handleAddNoteFirebase = async () => {
    setIsLoading((isLoading) => ({ ...isLoading, addNote: true }));

    if (title === "" || content === "") {
      setSnackTitle("Erro");
      setSnackMessage("Preencha os campos");
      setSnackType("error");
      setOpenSnackbar(true);
      return;
    }

    try {
      const docRef = await addUserNote({
        userUid: user.uid,
        title,
        content,
        // testData: true,
      });

      setTitle("");
      setContent("");
      setSnackTitle("Sucesso");
      setSnackMessage("Nota adicionada com sucesso");
      setSnackType("success");
      setOpenSnackbar(true);

      console.log("Document written with ID: ", docRef);
    } catch (e: any) {
      setSnackTitle("Erro");
      setSnackMessage(e.message);
      setError(e.message);
      setSnackType("error");
      setOpenSnackbar(true);
      console.log("Error adding document: ", e.name, e.message);
    } finally {
      setIsLoading((isLoading) => ({ ...isLoading, addNote: false }));
    }
  };

  const handleRemoveData = async () => {
    setIsLoading((isLoading) => ({ ...isLoading, removeData: true }));
    try {
      setTitle("");
      setContent("");
      setSnackTitle("Sucesso");
      setSnackMessage("Notas de teste removidos com sucesso");
      setSnackType("success");
      await removeUserTestData({ userUid: user.uid, refPath: "notes" });
    } catch (e: any) {
      setSnackTitle(e.name);
      setSnackMessage(e.message);
      setError(e.message);
    } finally {
      setIsLoading((isLoading) => ({ ...isLoading, removeData: false }));
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

      <Box
        sx={{
          "& > *:not(:first-child)": {
            marginLeft: "20px",
          },
        }}
      >
        <Button
          variant="contained"
          onClick={handleAddNoteFirebase}
          disabled={isLoading.addNote}
        >
          {isLoading.addNote ? <>loading</> : <>add note</>}
        </Button>
        <Button
          variant="contained"
          onClick={handleRemoveData}
          disabled={isLoading.removeData}
        >
          remove test data
        </Button>
      </Box>

      <SnackbarErrorSuccess
        message={snackMessage}
        title={snackTitle}
        type={snackType}
        open={openSnackbar}
        handleClose={handleClose}
      />
    </Container>
  );
};
