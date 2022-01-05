import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import { SxProps } from "@mui/material";

import { theme } from "../../styles/theme";
console.log(98219, theme);

type LinkProps =
  | React.CSSProperties
  | ((props: { isActive: boolean }) => React.CSSProperties);

export const Link = styled(RouterLink)`
  display: flex;
  text-decoration: none;
  color: #fff;

  & > *:not(:first-child) {
    margin-left: ${theme.sizing.scale400};
  }
`;

export const BoxStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: theme.sizing.scale700,
  borderBottom: `${theme.sizing.scale0} solid ${theme.palette.action.disabled}`,
};

export const LinkBoxStyle: SxProps = {
  borderBottom: `${theme.sizing.scale0} solid ${theme.palette.action.disabled}`,
  padding: theme.sizing.scale400,
  "a:not(:first-child)": {
    marginLeft: theme.sizing.scale250,
  },
};

export const LogoutButtonStyle: SxProps = {
  "& > *:not(:first-child)": {
    marginLeft: theme.sizing.scale200,
  },
};

export const LinkStyle: LinkProps = ({ isActive }) => ({
  color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
  textDecoration: isActive ? "" : "none",
});
