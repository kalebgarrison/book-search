import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";
import Navbar from "../components/Navbar";


// This page should show the saved books but unfortunately I keep receiving an error when trying to get them to save. 
class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <h2>Saved books</h2>
        <Navbar />
        <Results books={this.state.savedBooks} />
      </div>
    );
  }
}

export default Saved;
