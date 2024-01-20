import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      // console.log("response is ok", response);
      const data = await response.json();
      // console.log("contact data: ", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <h1>hello cyko contacts</h1>
      {contactData.map((curContactData, index) => {
        const { username, email, message } = curContactData;
        return (
          <div key={index}>
            <p>{username}</p>
            <p>{email}</p>
            <p>{message}</p>
            <button className="btn">delete</button>
          </div>
        );
      })}
    </>
  );
};
