import axios from "axios";
import React from "react";
import "./profile.css";

// document.getElemetyId("save-btn").addEventListener("click", displayUpdate);
// const saveBtn = document.getElementById("save-btn");

class Profile extends React.Component {
  state = {
    books: [],
  };

  // function displayUpdate() {
  //   document.getElementById("book-display");S
  // }

  componentDidMount() {
    // saveBtn.addEventListener("click", () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      const books = res.data;
      this.setState({ books });
    });
    // });
  }

  render() {
    return (
      <div className="main-summary">
        <div className="sub-summary">
          <div className="detail">
            <h2>Summary</h2>
            <div className="sub-detail">
              <div id="book-display">
                {/* Display here */}
                <ul>
                  {this.state.books.map((book) => (
                    <li key={book.id}>
                      {book.title}
                      {book.url}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
