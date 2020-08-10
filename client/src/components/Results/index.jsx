import React, { Component } from "react";
import API from "../../utils/API";

class index extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  handleSave = (book) => {
    if (
      this.state.savedBooks &&
      this.state.savedBooks.map((book) => book._id).includes(book._id)
    ) {
      API.deleteBook(book._id)
        .then((deletedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.filter(
              (book) => book._id !== deletedBook._id
            ),
          })
        )
        .catch((err) => console.error(err));
    } else {
      API.saveBook(book)
        .then((savedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.concat([savedBook]),
          })
        )
        .catch((err) => console.error(err));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3>Results</h3>
            <div className="row">
              {this.props.books.map((result) => (
                <div className="col-sm-10">
                  <div className="card" key={result._id}>
                    <h5 className="card-header">Featured</h5>
                    <div className="card-body">
                      <div className="col-md-2">
                        <img
                          alt={result.title}
                          className="img-fluid"
                          src={result.image}
                        />
                      </div>

                      <h5 className="card-title">
                        {result.title} by {result.authors}
                      </h5>
                      <p className="card-text">{result.description}</p>
                      <a
                        href={result.link}
                        className="btn badge-pill btn-outline-dark mt-3"
                        target="_blank"
                      >
                        View
                      </a>
                      {/* <button
                        onClick={() => this.handleSave(result)}
                        className="btn badge-pill btn-outline-warning mt-3 ml-3"
                      >
                        {this.state.savedBooks
                          .map((book) => book._id)
                          .includes(result._id)
                          ? "Unsave"
                          : "Save"}
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
