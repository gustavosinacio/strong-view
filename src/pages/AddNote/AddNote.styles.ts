import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;

  & > *:not(:first-child) {
    border-radius: 8px;
    margin-top: 20px;
  }
`;
