import React, { Component } from "react";
import Translate from "./Translated";

class News extends Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.articles.map((item) => {
          return (
            
              <li key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Translate title={item.title} description={item.description} />
              </li>
            
          );
        })}
        </ul>
      </div>
    );
  }
}

export default News;
