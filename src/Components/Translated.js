import React, { Component } from "react";

class Translated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      isLoading: false
    };
  }

  handleTranslate = () => {
    this.setState({ isLoading: true });
    const { title, description } = this.props;
    const TranslateAPI =
      "https://translate.yandex.net/api/v1.5/tr.json/translate" +
      "?key=trnsl.1.1.20200401T144220Z.0f5a7e60e0520271.c100038ccb2f3285d494e2e05cee085529cbc5a4" +
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
          description: res.text[1],
          isLoading: false
        });
      })

      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.isLoading) {
      return <p>Translation is Loading ...</p>;
    }
    // if the news not in arabic then display translate button
    const hasArabic = /[\u0600-\u06FF]/;
    if (
      !hasArabic.test(this.props.title) &&
      !hasArabic.test(this.props.description)
    ) {
      return (
        <div>
          <button onClick={this.handleTranslate} className="translate-btn">
            Translate to Arabic
          </button>
          <h2 className="translation-title">{this.state.title}</h2>
          <p className="translation-description">{this.state.description}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Translated;
