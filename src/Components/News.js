import React, { Component } from "react";
import Translate from "./Translated";
import { Slide } from "react-slideshow-image";

// slideshow properities
const properties = {
  duration: 100000, //Time it takes (milliseconds) before next transition starts
  transitionDuration: 500, //Determines how long the transition takes
  infinite: true, //Specifies if the transition should loop throughout
  indicators: true, //For specifying if there should be dots below the slideshow
  arrows: true
};
class News extends Component {
  render() {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          {this.props.articles.map((item,i) => {
            return (
              <ul key={i} className="news-list">
                <li  className="news-item">
                  <h1 className="news-title">{item.title}</h1>
                  <p className="news-description">{item.description}</p>
                  <Translate
                    title={item.title}
                    description={item.description}
                  />
                </li>
              </ul>
            );
          })}
        </Slide>
      </div>
    );
  }
}

export default News;
