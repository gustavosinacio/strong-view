import { UserUid, RemoveUserTestData, UserNote } from "../types";
import {
  addDoc,
  collection,
  getFirestore,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const addUserNote = async ({ userUid, title, content }: UserNote) => {
  if (!userUid) throw new Error("addNote needs user uid");

  const firestoreDb = getFirestore();

  const collectionRef = await addDoc(
    collection(firestoreDb, "users", userUid, "notes"),
    {
      title,
      content,
      createdAt: new Date(),
    }
  );

  return collectionRef;
};

export const removeUserTestData = async ({
  userUid,
  refPath,
}: RemoveUserTestData) => {
  const firestoreDb = getFirestore();
  if (!userUid) throw new Error("removeUserTestData needs user uid");

  try {
    const collectionRef = collection(firestoreDb, "users", userUid, refPath);

    const collectionQuery = query(collectionRef, where("testData", "==", true));

    const querySnapshot = await getDocs(collectionQuery);

    querySnapshot.forEach((queriedDoc) => {
      const docRef = doc(firestoreDb, "users", userUid, refPath, queriedDoc.id);

      deleteDoc(docRef);
    });
  } catch (e: any) {
    console.log(982171, e.name, e.message);
  }
};

export const getNotes = async ({ userUid }: UserUid) => {
  if (!userUid) throw new Error("getNotes needs user uid");

  const firestoreDb = getFirestore();
  try {
    const notesRef = collection(firestoreDb, "users", userUid, "notes");

    const notes = await getDocs(notesRef);

    console.log(98218, notes.docs);

    return notes;
  } catch (e: any) {}
};
