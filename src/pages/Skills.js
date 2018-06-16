import React, { Component } from "react";
import { StyledTitleText, MidScreenContainer, StyledBodyText } from "../styled";
import { aboutText1 } from "../constants/copy";
import getThemeColorForRoute from "../utilities/getThemeColorForRoute";
import withLogoSquareConsumer from "../components/HOC/withLogoSquareConsumer";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.midScreenRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this._removeLogoSquareIfInTheWay);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._removeLogoSquareIfInTheWay);
  }

  _removeLogoSquareIfInTheWay = () => {
    const { toggleLogoSquareIfInTheWay } = this.props;
    const topOfContainer = this.midScreenRef.current.getBoundingClientRect()
      .top;
    toggleLogoSquareIfInTheWay(topOfContainer);
  };

  render() {
    const { pathname } = this.props.location;
    const themeColor = getThemeColorForRoute(pathname);

    return (
      <div ref={this.midScreenRef}>
        <MidScreenContainer>
          <StyledTitleText color={themeColor} centered>
            {`Some of the skills I've picked up along the way`}
          </StyledTitleText>
          <StyledBodyText>{aboutText1}</StyledBodyText>
        </MidScreenContainer>
      </div>
    );
  }
}

const SkillsWithLogoSquareConsumer = withLogoSquareConsumer(Skills);
export { SkillsWithLogoSquareConsumer };
