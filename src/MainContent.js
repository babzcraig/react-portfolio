import React from 'react';


class MainContent extends React.Component {
  state = {
    enter: false,
    innerHTML: "waiting to be changed...",
    entryCount: 0
  }

  mouseEnter = (e) => {
    console.log('entered the object!', e);
    this.setState((prevState) => {
      prevState.entryCount = prevState.entryCount + 1;
      prevState.enter = true;
    })
  }

  mouseLeave = (e) => {
    console.log('entered the object!', e);
    this.setState({enter: false, innerHTML: "moved once now waiting again..." })
  }

  mouseMove = (e) => {
    console.log('moving around in the object')
      const x = e.clientX;
      const y = e.clientY;
      
      const innerHTML = `Moved to X: ${x}, Y: ${y}`;
      this.setState({innerHTML: innerHTML})
  }

  render() {
    const { enter, innerHTML, entryCount } = this.state;

    return (
      <div className="main-content">
        Main Content shit right here
        <div className={enter ? "enterred testing" : "testing"} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseMove={this.mouseMove}>
          {innerHTML}
          {` Your entry count is: ${entryCount}`}
        </div>
      </div>
    )
  }
}

export default MainContent;
