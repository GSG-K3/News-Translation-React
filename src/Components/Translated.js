import React, { Component } from "react";

class Translated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  handleTranslate = () => {
    const { title, description } = this.props;
    const TranslateAPI =
      "https://translate.yandex.net/api/v1.5/tr.json/translate" +
      "?key=trnsl.1.1.20200204T203412Z.4c3799296843dd33.06f6e271e121e6ebd8428ff4fbab8ad1e1fa3a32" +
      "&text=" +
      title +
      "&text=" +
      description +
      "&lang=ar";
    fetch(TranslateAPI)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          title: res.text[0],
          description: res.text[1]
        });
      })

      .catch((err) => console.log(err));
  };

  render() {
    // if the news not in arabic then display translate button
    const hasArabic = /[\u0600-\u06FF]/;
    if (
      !hasArabic.test(this.props.title) &&
      !hasArabic.test(this.props.description)
    ) {
      return (
        <div>
          <button onClick={this.handleTranslate}>Translate to Arabic</button>
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Translated;
