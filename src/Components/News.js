import React, { Component } from "react";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    const newsAPI =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=626633f093cd40b7bda4ca1a94cc2b89";
    fetch(newsAPI)
      .then((res) => res.json())

      .then((res) => {
        this.setState({ lists: res.articles });
      })

      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.lists.map((item, i) => {
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
