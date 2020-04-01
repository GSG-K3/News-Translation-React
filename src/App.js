import React, { Component } from "react";
import "./App.css";
import News from "./Components/News";
import Search from "./Components/Search";
import logo from "./logo.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, articles: [] };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const newsAPI =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=626633f093cd40b7bda4ca1a94cc2b89";
    fetch(newsAPI)
      .then((res) => res.json())

      .then((res) => {
        this.setState({ articles: res.articles, isLoading: false });
      })

      .catch((err) => console.log(err));
  }

  displayArticles = (articles) => {
    this.setState({
      articles
    });
  };

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <header className="header">
          <img src={logo} alt="logo" className="logo" />
          <div className="search-container">
            <h1 className="page-title">The World Today</h1>
            <h3 className="page-tagline">Search, Explore, Discover</h3>
            <Search displayArticles={this.displayArticles} />
          </div>
        </header>
        <News articles={this.state.articles} />
        <footer className="footer">Made with ♡ @2020</footer>
      </div>
    );
  }
}
export default App;
