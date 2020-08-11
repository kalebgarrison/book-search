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

  //   This function should save the book in theory. However, I can not get it to work as I keep receiving a Type Error message and I do not have the time to debug due to Project 3
  handleSave = (id) => {
    const book = this.state.books.find((book) => book.id === id);
    console.log(book);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => this.getBooks());
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
                      {/* This should save the book on click but it does not due to a type error */}
                      <button
                        type="submit"
                        id={result.id}
                        onClick={() => this.handleBookSave(result.id)}
                        className="btn badge-pill btn-outline-warning mt-3 ml-3"
                      >
                        Save
                      </button>
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
