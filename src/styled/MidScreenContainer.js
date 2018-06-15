import styled from "styled-components";

const MidScreenContainer = styled.div`
  width: 600px;
  min-height: 800px;
  margin: auto;
  margin-bottom: 5rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export { MidScreenContainer };
