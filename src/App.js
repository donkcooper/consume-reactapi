import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Contact from "./components/contact";

class App extends React.Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          {this.state.contacts.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              onUserDetails={this.handleUserDetails}
            />
          ))}
        </main>
      </React.Fragment>
    );
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ contacts: data });
      });
  }

  handleUserDetails = (contact) => {
    console.log(contact);
  };
}

export default App;
