import { ReactElement, useContext, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  Box,
  AlertColor,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { UserContext } from "../../contexts/user";
import { SnackbarErrorSuccess } from "../../components/SnackbarErrorSuccess";
import { addUserNote, removeUserTestData } from "../../utils/firebase";

import {
  NoteEditContainer,
  ButtonsContainer,
  Container,
  NoteInputContainer,
} from "./AddNote.styles";
import {
  Favorite,
  FavoriteBorder,
  BookmarkBorder,
  Bookmark,
  EmojiEmotions,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";

export const AddNote = (): ReactElement => {
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [moods, setMoods] = useState<string[]>([]);
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
        userUid: user.uid || "",
        title,
        content,
        moods,
      });

      setTitle("");
      setContent("");
      setSnackTitle("Sucesso");
      setSnackMessage("Nota adicionada com sucesso");
      setSnackType("success");
      setOpenSnackbar(true);
      setMoods([]);

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
      await removeUserTestData({ userUid: user.uid || "", refPath: "notes" });
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

  const handleChangeMood = (event: any) => {
    console.log(982156, event.target.name);

    const changed = event.target.name;
    const indexOfMood = moods.indexOf(changed);
    if (indexOfMood < 0) {
      setMoods((currentMoods) => [...currentMoods, changed]);
    } else {
      const newMoods = [...moods];
      newMoods.splice(indexOfMood, 1);
      setMoods(newMoods);
    }
  };

  return (
    <Container>
      <NoteEditContainer>
        <Box sx={{ flex: 1 }}>
          <NoteInputContainer>
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
                label="Nota"
                multiline
                maxRows={10}
                minRows={4}
                value={content}
                onChange={handleChange}
              />
            </FormControl>
          </NoteInputContainer>
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormControl sx={{ m: 3, margin: 0 }} variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={moods.indexOf("apx") >= 0}
                    onChange={handleChangeMood}
                    name="apx"
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                }
                label="apx"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={moods.indexOf("estudioso") >= 0}
                    onChange={handleChangeMood}
                    name="estudioso"
                    icon={<BookmarkBorder />}
                    checkedIcon={<Bookmark />}
                  />
                }
                label="estudioso"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={moods.indexOf("feliz") >= 0}
                    onChange={handleChangeMood}
                    name="feliz"
                    icon={<EmojiEmotionsOutlined />}
                    checkedIcon={<EmojiEmotions />}
                  />
                }
                label="feliz"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </NoteEditContainer>

      <ButtonsContainer>
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
      </ButtonsContainer>

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
