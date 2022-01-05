import { RemoveUserTestData, UserNote } from "./types.d";
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
  if (!userUid) throw new Error("Note needs user uid");

  const firestoreDb = getFirestore();

  const collectionRef = await addDoc(
    collection(firestoreDb, "users", userUid || "", "notes"),
    {
      title,
      content,
      createdAt: new Date(),
      testData: true,
    }
  );

  return collectionRef;
};

export const removeUserTestData = async ({
  userUid,
  refPath,
}: RemoveUserTestData) => {
  const firestoreDb = getFirestore();

  try {
    const collectionRef = collection(
      firestoreDb,
      "users",
      userUid || "",
      refPath
    );

    const collectionQuery = query(collectionRef, where("testData", "==", true));

    const querySnapshot = await getDocs(collectionQuery);

    querySnapshot.forEach((queriedDoc) => {
      const docRef = doc(
        firestoreDb,
        "users",
        userUid || "",
        refPath,
        queriedDoc.id
      );

      deleteDoc(docRef);
    });
  } catch (e: any) {
    console.log(982171, e.name, e.message);
  }
};
