import styled from "styled-components";
import { connectLinkColor } from "../constants/colors";

const StyledConnectLink = styled.a`
  display: block;
  font-size: 0.9rem;
  color: ${connectLinkColor};
  font-weight: bold;
  line-height: 1;
`;

export { StyledConnectLink };
