export interface UserNote {
  userUid: string | null | undefined;
  title: string;
  content: string;
  testData?: boolean;
}

export interface RemoveUserTestData {
  userUid: string | null | undefined;
  refPath: string;
}
