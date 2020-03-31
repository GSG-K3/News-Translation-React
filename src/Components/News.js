import React, { Component } from "react";

class News extends Component {




  render() {
    
    return (
      <div>
        {this.props.articles.map((item, i) => {
          return (
            <ul key={i}>
              <li>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>translate</button>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default News;
