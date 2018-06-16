import React, { Component } from "react";
import { StyledTitleText, MidScreenContainer, StyledBodyText } from "../styled";
import avatar from "../assets/img/babs_headsot_new.jpg";
import Avatar from "../components/Avatar";
import { aboutText1, aboutText2, aboutText3 } from "../constants/copy";
import getThemeColorForRoute from "../utilities/getThemeColorForRoute";
import withLogoSquareConsumer from "../components/HOC/withLogoSquareConsumer";

class About extends Component {
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
          <Avatar imageSrc={avatar} />
          <StyledTitleText color={themeColor} centered>
            {"Babs Craig"}
          </StyledTitleText>
          <StyledBodyText>{aboutText1}</StyledBodyText>
          <StyledBodyText>{aboutText2}</StyledBodyText>
          <StyledBodyText>{aboutText3}</StyledBodyText>
        </MidScreenContainer>
      </div>
    );
  }
}

const AboutWithLogoSquareConsumer = withLogoSquareConsumer(About);
export { AboutWithLogoSquareConsumer };
