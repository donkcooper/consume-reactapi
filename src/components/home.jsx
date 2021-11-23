import React from "react";
import Contact from "./contact";

const Home = ({ contacts }) => {
  return (
    <main className="container">
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </main>
  );
};

export default Home;
