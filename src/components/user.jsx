import React from "react";
import { useParams } from "react-router-dom";

function User({ users }) {
  let { userId } = useParams();
  const selectedUser = users.filter((u) => u.id === parseInt(userId))[0];
  return (
    <div className="m-4">
      <p>Id: {userId}</p>
      <p>Name: {selectedUser.name}</p>
      <p>Phone: {selectedUser.phone}</p>
      <p>Email: {selectedUser.email}</p>
      <p>
        Address: {selectedUser.address.suite}, {selectedUser.address.street},{" "}
        {selectedUser.address.city} {selectedUser.address.zipcode}
      </p>
    </div>
  );
}

export default User;
