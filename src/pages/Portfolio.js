import React, { Component } from "react";
import { StyledTitleText, MidScreenContainer, StyledBodyText } from "../styled";
import { portfolioText } from "../constants/copy";
import getThemeColorForRoute from "../utilities/getThemeColorForRoute";
import withLogoSquareConsumer from "../components/HOC/withLogoSquareConsumer";
import PortfolioComponent from "../components/PortfolioComponent";

class Portfolio extends Component {
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

  _renderPortfolioComponent = (portfolio, i) => {
    return <PortfolioComponent portfolio={portfolio} key={i} />;
  };

  render() {
    const { pathname } = this.props.location;
    const themeColor = getThemeColorForRoute(pathname);

    return (
      <div ref={this.midScreenRef}>
        <MidScreenContainer>
          <StyledTitleText color={themeColor} centered>
            {`Some of the work I've done along the way`}
          </StyledTitleText>
          <StyledBodyText>{portfolioText}</StyledBodyText>
          {[3, 3, 3].map(this._renderPortfolioComponent)}
        </MidScreenContainer>
      </div>
    );
  }
}

const PortfolioWithLogoSquareConsumer = withLogoSquareConsumer(Portfolio);
export { PortfolioWithLogoSquareConsumer };
