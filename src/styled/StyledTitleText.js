import styled from "styled-components";
import { defaultTitleColor } from "../constants/colors";

const StyledTitleText = styled.h2`
  color: ${({ color }) => color || defaultTitleColor};
  font-weight: bold;
`;

export { StyledTitleText };
