import React from "react";
import { LogoSquareConsumer } from "../../context/LogoSquareContext";

function withLogoSquareConsumer(Component) {
  return class extends React.Component {
    render() {
      return (
        <LogoSquareConsumer>
          {({ toggleLogoSquareIfInTheWay, width, minWidth }) => (
            <Component
              {...this.props}
              width={width}
              minWidth={minWidth}
              toggleLogoSquareIfInTheWay={toggleLogoSquareIfInTheWay}
            />
          )}
        </LogoSquareConsumer>
      );
    }
  };
}

export default withLogoSquareConsumer;
