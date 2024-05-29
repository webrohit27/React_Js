import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import "../css/admin.css";

const AdminUsers = () => {
  const [users, setusers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("users data *", data);
      console.log(data[0].isAdmin);

      setusers(data);
    } catch (error) {
      console.log(error);
    }
  };

  //delete users

  const deleteuser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("users after delete data *", data);

      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="table-container">
          <table className="table table-hover user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>IsAdmin</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((currentElemnt, index) => {
                return (
                  <tr key={index}>
                    <td>{currentElemnt.username}</td>
                    <td>{currentElemnt.email}</td>
                    <td>{currentElemnt.phone}</td>
                    <td>{currentElemnt.isAdmin ? "True" : "False"}</td>
                    <td>
                      <Link to={`/admin/users/${currentElemnt._id}/edit`}>
                        <button className="btn btn-warning px-3">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-danger"
                        onClick={() => {
                          deleteuser(currentElemnt._id);
                        }}
                      >
                        {" "}
                        Delete
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

export default AdminUsers;
