import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Input from "../components/Input";
import Results from "../components/Results";

class Search extends Component {
  state = {
    value: "",
    books: [],
    search: "",
  };

  componentDidMount() {
    this.bookSearch();
  }

  bookSearch = (query) => {
    API.getBook(query)
      .then((res) =>
        this.setState({
          books: res.data.items.map((data) => this.bookCard(data)),
        })
      )
      .catch((err) => console.error(err));
  };

  bookCard = (data) => {
    return {
      _id: data.id,
      title: data.volumeInfo.title,
      authors: data.volumeInfo.authors,
      description: data.volumeInfo.description,
      image: data.volumeInfo.imageLinks.thumbnail,
      link: data.volumeInfo.previewLink,
    };
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.bookSearch(this.state.search);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Input
          name="search"
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Results books={this.state.books} />
      </div>
    );
  }
}

export default Search;
