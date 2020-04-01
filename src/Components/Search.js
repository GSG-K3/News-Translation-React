import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { countryCode: "" };
  }

  // when user selects a certian country from the list save it's value in state
  handleChange = (event) => {
    this.setState({ countryCode: event.target.value });
  };

  // when user submit the form we will fetch news based on the country code in state
  handleSubmit = (event) => {
    event.preventDefault();
    const { countryCode } = this.state;
    if (!countryCode) {
      alert("you should select a country");
      return;
    }
    const newsAPI = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=626633f093cd40b7bda4ca1a94cc2b89`;
    fetch(newsAPI)
      .then((res) => res.json())
      .then((data) => {
        this.props.displayArticles(data.articles);
      })

      .catch((err) => console.log(err));
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search__menu" className="search__label">
          Choose a Country:
          <select
            className="search__menu"
            name="search__menu"
            value={this.state.countryCode}
            onChange={this.handleChange}
          >
            <option disabled value="">
              choose a country
            </option>
            <option value="au">Australia</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="gr">Greece</option>
            <option value="in">India</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="mx">Mexico</option>
            <option value="ma">Morocco</option>
            <option value="ru">Russia</option>
            <option value="sa">Saudi Arabia</option>
            <option value="kr">South Korea</option>
            <option value="tr">Turkey</option>
            <option value="ae">UAE</option>
            <option value="gb">United Kingdom</option>
            <option value="us">United States</option>
          </select>
        </label>
        <input type="submit" value="Search" className="search__btn" />
      </form>
    );
  }
}

export default Search;
