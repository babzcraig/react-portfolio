import React from "react";

const LogoSquareContext = React.createContext({
  // width: 0,
  // minWidth: 997,
  // slideOutLogoSquare: false,
  // toggleSlideOutLogoSquare: () => null
});

// export the consumer
export const LogoSquareConsumer = LogoSquareContext.Consumer;

// export the provider
export class LogoSquareProvider extends React.Component {
  state = {
    width: 0,
    height: 0,
    logoIsVisible: true
  };

  componentDidMount() {
    this._updateWindowDimensions();
    window.addEventListener("resize", this._updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._updateWindowDimensions);
  }

  _updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  toggleLogoSquareIfInTheWay = topOfContainer => {
    const { width, logoIsVisible } = this.state;
    const minWidth = 997;
    const bottomOfLogo = width > 997 ? 130 : 80;
    const logoIsInTheWay = width < minWidth && topOfContainer < bottomOfLogo;
    const logoShouldBePutBack =
      !logoIsInTheWay && !logoIsVisible && width < minWidth;

    if (logoIsInTheWay) return this.setState({ logoIsVisible: false });
    if (logoShouldBePutBack) return this.setState({ logoIsVisible: true });
  };

  render() {
    const { slideOutLogoSquare, width, logoIsVisible } = this.state;

    return (
      <LogoSquareContext.Provider
        value={{
          slideOutLogoSquare,
          width,
          logoIsVisible,
          toggleLogoSquareIfInTheWay: this.toggleLogoSquareIfInTheWay
        }}
      >
        {this.props.children}
      </LogoSquareContext.Provider>
    );
  }
}
