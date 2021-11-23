import React from "react";

const Contact = ({ contact, onUserDetails }) => {
  return (
    <div className="card m-2">
      <h5 className="card-header">
        <a
          href="#"
          className="card-link"
          onClick={() => onUserDetails(contact)}
        >
          {contact.username}
        </a>
      </h5>
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
        <p className="card-text">{contact.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default Contact;
