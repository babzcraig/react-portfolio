import React from 'react';
import PortfolioItem from './PortfolioItem';

const portfolioArray = [{
  id: 1,
  title: "Sendbox App",
  description: "Logistics solutions app",
  link: "http://www.sendbox.com.ng",
  image: "http://via.placeholder.com/350x350",
  tech: ["ReactJS", "Node", "Illustrator"],
  year: "2016",
  size: "small"
},
{
  id: 2,
  title: "Workstaion App",
  description: "Coworking space",
  link: "http://www.workstationng.com",
  image: "http://via.placeholder.com/350x350",
  tech: ["Rails", "Angular"],
  year: "2017",
  size: "small"
},{
  id: 3,
  title: "Sendbox App",
  description: "Logistics solutions app",
  link: "http://www.sendbox.com.ng",
  image: "http://via.placeholder.com/350x350",
  tech: ["ReactJS", "Node", "Illustrator"],
  year: "2016",
  size: "large"
},
{
  id: 4,
  title: "Workstaion App",
  description: "Coworking space",
  link: "http://www.workstationng.com",
  image: "http://via.placeholder.com/350x350",
  tech: ["Rails", "Angular"],
  year: "2017",
  size: "small"
},{
  id: 5,
  title: "Sendbox App",
  description: "Logistics solutions app",
  link: "http://www.sendbox.com.ng",
  image: "http://via.placeholder.com/350x350",
  tech: ["ReactJS", "Node", "Illustrator"],
  year: "2016",
  size: "large"
},
{
  id: 6,
  title: "Workstaion App",
  description: "Coworking space",
  link: "http://www.workstationng.com",
  image: "http://via.placeholder.com/350x350",
  tech: ["Rails", "Angular"],
  year: "2017",
  size: "large"
},{
  id: 7,
  title: "Sendbox App",
  description: "Logistics solutions app",
  link: "http://www.sendbox.com.ng",
  image: "http://via.placeholder.com/350x350",
  tech: ["ReactJS", "Node", "Illustrator"],
  year: "2016",
  size: "small"
},
{
  id: 8,
  title: "Workstaion App",
  description: "Coworking space",
  link: "http://www.workstationng.com",
  image: "http://via.placeholder.com/350x350",
  tech: ["Rails", "Angular"],
  year: "2017",
  size: "small"
},{
  id: 9,
  title: "Sendbox App",
  description: "Logistics solutions app",
  link: "http://www.sendbox.com.ng",
  image: "http://via.placeholder.com/350x350",
  tech: ["ReactJS", "Node", "Illustrator"],
  year: "2016",
  size: "large"
},
{
  id: 10,
  title: "Workstaion App",
  description: "Coworking space",
  link: "http://www.workstationng.com",
  image: "http://via.placeholder.com/350x350",
  tech: ["Rails", "Angular"],
  year: "2017",
  size: "large"
}]


class Portfolio extends React.Component {
  state = {
    portfolio: portfolioArray,
    selectedItem: null
  }

  handlePortfolioItemHover = (id) => {
    console.log("called: ", id);
    setTimeout(() => this.setState({ selectedItem: id }), 150);
  }

  render() {
    const { portfolio, selectedItem } = this.state;
    // const portfolioItems = portfolio.map((portfolioItem) => {
    const portfolioItems = portfolio.map((portfolioItem) => {
      return (
        <PortfolioItem
          key={portfolioItem.id}
          portfolioItem={portfolioItem}
          mouseEnter={this.handlePortfolioItemHover}
          mouseLeave={this.handlePortfolioItemLeave}
          selected={selectedItem === portfolioItem.id ? true : false}
        />
      )
    })
    return (
      <div className="portfolio">
        {portfolioItems}
      </div>
    )
  }
}

export {Portfolio};
