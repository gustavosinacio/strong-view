import { Timestamp } from "firebase/firestore";

export interface UserUid extends UserUid {
  userUid: string | null;
}

export interface UserNote extends UserUid {
  title: string;
  content: string;
  testData?: boolean;
}

export interface RemoveUserTestData extends UserUid {
  refPath: string;
}

export interface NoteData {
  id: string;
  title: string;
  content: string;
  createdAt: Timestamp;
}
