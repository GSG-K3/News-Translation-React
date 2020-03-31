import React, { Component } from "react";
import "./App.css";
import News from "./Components/News";
import Search from "./Components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  displayArticles = (articles) => {
    this.setState({
      articles
    });
    console.log(this.state.articles);
  };

  render() {
    return (
      <div className="App">
        <Search displayArticles={this.displayArticles} />
        <News />
      </div>
    );
  }
}
export default App;
