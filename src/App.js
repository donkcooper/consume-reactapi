import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import User from "./components/user";

class App extends React.Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home contacts={this.state.contacts} />} />
            <Route
              path="/user/:userId"
              element={<User users={this.state.contacts} />}
            />
          </Routes>
        </Router>
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
    this.setState({ user: contact });
  };
}

export default App;
