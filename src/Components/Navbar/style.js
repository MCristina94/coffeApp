import { AppBar } from "@mui/material";
import { theme } from "../../style/theme";
import styled from "@emotion/styled";

export const CustomNavbar = styled(AppBar)`
  && {
    background-color: ${theme.colors.secondary} !important;
    position: fixed;
    top: 0;
    left: 279px;
    width: calc(100% - 279px);
    z-index: 1100;
    box-shadow: none;
  }
`;
