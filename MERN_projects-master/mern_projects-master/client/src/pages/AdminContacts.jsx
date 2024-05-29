import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data", data);

      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // delet contact ..............
  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        getContactsData();
        toast.success("deleted succefully");
      } else {
        toast.success("not deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    {
      getContactsData();
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="contact-container mt-3">
          <table className="table table-hover mt-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>DELETE</th>
              </tr>
            </thead>

            <tbody>
              {contactData.map((currentContactData, index) => {
                const { username, email, message, _id } = currentContactData;
                console.log(username);
                return (
                  <tr key={index}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{message}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteContact(_id)}>
                        delete msg
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

     
    </>
  );
};

export default AdminContacts;
