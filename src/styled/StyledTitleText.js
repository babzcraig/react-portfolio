import styled from "styled-components";
import { defaultTitleColor } from "../constants/colors";

const StyledTitleText = styled.h2`
  color: ${({ color, centered }) => color || defaultTitleColor};
  font-weight: bold;
  text-align: ${({ centered }) => (centered ? "center" : "auto")};
`;

export { StyledTitleText };
