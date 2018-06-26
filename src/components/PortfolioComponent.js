import React from "react";
import styled from "styled-components";
import { StyledBodyText } from "../styled";

class PortfolioComponent extends React.PureComponent {
  render() {
    return (
      <StyledPortfolioComponent>
        <h3>Sendbox</h3>
        <StyledBodyText>
          Donec sed odio dui. Donec ullamcorper nulla non metus auctor
          fringilla. Donec ullamcorper nulla non metus auctor fringilla. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </StyledBodyText>
      </StyledPortfolioComponent>
    );
  }
}

const StyledPortfolioComponent = styled.article`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  padding: 20px 15px;
  margin-bottom: 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export default PortfolioComponent;
