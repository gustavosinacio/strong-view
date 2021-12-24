import { Button } from "@mui/material";
import { ReactElement, useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Container } from "./Home.styles";

export const Home = (): ReactElement => {
  const db = getFirestore();
  const auth = getAuth();
  const [count, setCount] = useState(0);

  const upCount = async () => {
    setCount((prevCount) => prevCount + 1);

    try {
      const docRef = await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      });
      console.log("Document written with ID: ", docRef);
    } catch (e: any) {
      console.error("Error adding document: ", e.message);
    }
  };

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        "gsinacio94@gmail.com",
        "testOutStrongPassword"
      );

      const user = userCredential.user;
      console.log(98213, "logging in", user);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(98211, { errorCode, errorMessage });
    }
  };

  const createUser = async () => {
    createUserWithEmailAndPassword(
      auth,
      "gsinacio94@gmail.com",
      "testOutStrongPassword"
    );
  };

  return (
    <Container>
      <div>
        <Button variant="contained" onClick={createUser}>
          create user
        </Button>
        <Button variant="contained" onClick={login}>
          Login
        </Button>
      </div>
      <p>
        Count: <span>{count}</span>
      </p>
      <Button variant="contained" onClick={upCount}>
        Upcount
      </Button>
    </Container>
  );
};
