import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import portfolioArray from "../constants/portfolioArray";

class Portfolio extends React.Component {
  state = {
    portfolio: portfolioArray,
    selectedItem: null
  };

  handlePortfolioItemHover = id => {
    console.log("called: ", id);
    setTimeout(() => this.setState({ selectedItem: id }), 150);
  };

  render() {
    const { portfolio, selectedItem } = this.state;
    // const portfolioItems = portfolio.map((portfolioItem) => {
    const portfolioItems = portfolio.map(portfolioItem => {
      return (
        <PortfolioItem
          key={portfolioItem.id}
          portfolioItem={portfolioItem}
          mouseEnter={this.handlePortfolioItemHover}
          mouseLeave={this.handlePortfolioItemLeave}
          selected={selectedItem === portfolioItem.id ? true : false}
        />
      );
    });
    return <div className="portfolio">{portfolioItems}</div>;
  }
}

export { Portfolio };
