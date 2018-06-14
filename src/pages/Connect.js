import React, { Component } from "react";

class Connect extends Component {
  render() {
    return (
      <div className="connect">
        <h2 className="title">{"I'd Love to hear from you"}</h2>
        <div>
          <a href="mailto:babscraig@gmail.com" className="connect-link">
            babscraig@gmail.com
          </a>
          <span className="tagline">Send an email...</span>
        </div>
        <div>
          <a href="tel:+2348095997279" className="connect-link">
            +234 809 599 7279
          </a>
          <span className="tagline">
            {"Or call. I'm available between 9am to 6pm GMT+1"}
          </span>
        </div>
        <span className="margin24pxV" />
        <h2 className="title">{"Connect With me"}</h2>
        <div>
          <a
            className="twitter"
            href="https://www.twitter.com/thebabscraig"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pixelkeet on Twitter
          </a>
          <span>@thebabscraig</span>
        </div>
        <div>
          <a
            className="medium"
            href="https://www.twitter.com/thebabscraig"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pixelkeet on Twitter
          </a>
          <span>@thebabscraig</span>
        </div>
        <div>
          <a
            className="linkedin"
            href="https://www.twitter.com/thebabscraig"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pixelkeet on Twitter
          </a>
          <span>@thebabscraig</span>
        </div>
        <div>
          <a
            className="instagram"
            href="https://www.twitter.com/thebabscraig"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pixelkeet on Twitter
          </a>
          <span>@thebabscraig</span>
        </div>
      </div>
    );
  }
}

export { Connect };
