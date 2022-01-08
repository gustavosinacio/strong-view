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
