import React, { Component } from "react";
import "./App.css";
import News from "./Components/News";
import Search from "./Components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, articles: [] };
  }

  displayArticles = (articles) => {

    this.setState({
      articles
    });
  };

  componentDidMount() {
    
    this.setState({ isLoading: true });

    const newsAPI =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=626633f093cd40b7bda4ca1a94cc2b89";
    fetch(newsAPI)
      .then((res) => res.json())

      .then((res) => {
        console.log(res)
        this.setState({ articles: res.articles, isLoading: false });
      })

      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="App">
        <Search displayArticles={this.displayArticles} />
        <News articles={this.state.articles} />
      </div>
    );
  }
}
export default App;
