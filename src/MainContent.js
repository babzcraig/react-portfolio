import React from 'react';
import {Portfolio, Home, About, Connect, Skills} from './components';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class MainContent extends React.Component {
  state = {
    enter: false,
    innerHTML: "waiting to be changed...",
    entryCount: 0
  }

  mouseEnter = (e) => {
    this.setState((prevState) => {
      prevState.entryCount = prevState.entryCount + 1;
      prevState.enter = true;
    })
  }

  mouseLeave = (e) => {
    this.setState({enter: false, innerHTML: "moved once now waiting again..." })
  }

  mouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      const innerHTML = `Moved to X: ${x}, Y: ${y}`;
      this.setState({innerHTML: innerHTML})
  }

  render() {
    const { enter, innerHTML, entryCount } = this.state;

    return (
      <div className="main-content">

        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Route path="/connect" component={Connect} />
        <Route path="/about" component={About} />
      </div>
    )
  }
}

export default MainContent;
