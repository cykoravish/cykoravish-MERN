import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import toast from "react-hot-toast";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`user single data ${data}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("updated successfully");
      } else {
        toast.error("can't update");
      }
    } catch (error) {}
  };
  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">update user data</h1>
      </div>
      {/* <h1>Contact Page</h1> */}
      <div className="container grid grid-two-cols">
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={data.username}
                onChange={handleInput}
                autoCapitalize="off"
                required
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
                autoCapitalize="off"
                required
              />
            </div>
            <div>
              <label htmlFor="email">phone</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="off"
                value={data.phone}
                onChange={handleInput}
                autoCapitalize="off"
                required
              />
            </div>

            <div>
              <button type="submit"> update </button>
            </div>
          </form>
        </section>
      </div>
      <section className="mb-3"></section>
    </section>
  );
};