import styled from "styled-components";
import { connectLinkColor } from "../constants/colors";

const StyledConnectLink = styled.a`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 4px;
  color: ${connectLinkColor};
  font-weight: bold;
`;

export { StyledConnectLink };
