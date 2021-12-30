import { Button } from "@mui/material";
import { ReactElement, useContext, useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

import { Container } from "./Home.styles";
import { UserContext } from "../../contexts/user";

export const Home = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);

  const [title, setTitle] = useState("testtitle");
  const [content, setContent] = useState("notecontent");

  const db = getFirestore();
  const auth = getAuth();

  const addNoteFirebase = async () => {
    try {
      const docRef = await addDoc(
        collection(db, "users", user.uid || "", "notes"),
        {
          title,
          content,
        }
      );
      console.log("Document written with ID: ", docRef);
    } catch (e: any) {
      console.error("Error adding document: ", e.message);
    }
  };

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
    <Container>
      <div>
        <Button variant="contained" onClick={logout}>
          logout
        </Button>
      </div>
      <p>
        <span>{title}</span>
      </p>
      <Button variant="contained" onClick={addNoteFirebase}>
        add note
      </Button>
    </Container>
  );
};
