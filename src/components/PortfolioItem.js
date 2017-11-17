import React from 'react';

const PortfolioItem = ({
  portfolioItem,
  mouseEnter,
  mouseLeave,
  selected
}) => {
  const renderPortfolioItem = (() => {
    const { title, link, description, tech , year} = portfolioItem;
    if (selected) {
      return (
        // A detail component view
        <div className="">
          <h3>{title}</h3>
          <a href={link}>view project</a>
          <ul>tech used: {
            tech.map(t => <li>{t}</li>)
          }</ul>
          <p>{year}</p>
        </div>
      )
    }
    return (
    // a normal component
      <div className="">
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    )
  })();

  return (
    <div className={`portfolio-item ${portfolioItem.size}`} onMouseLeave={mouseLeave} onMouseEnter={() => mouseEnter(portfolioItem.id)}>
      {renderPortfolioItem}
    </div>
  )
};

export default PortfolioItem;
