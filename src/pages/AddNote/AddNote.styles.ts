import styled from "styled-components";
import { Box, Container as MuiContainer } from "@mui/material";

export const Container = styled(MuiContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  /* border: 3px dotted #f29; */
  min-height: 80vh;
`;

export const NoteEditContainer = styled(Box)`
  display: flex;
  flex-direction: column;

  & > div:not(:first-child) {
    margin-top: 10px;
  }
`;

export const NoteInputContainer = styled(Box)`
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin-top: 0px;
  }
`;

export const ButtonsContainer = styled(Box)`
  & > *:not(:first-child) {
    margin-left: 20px;
  }
`;
