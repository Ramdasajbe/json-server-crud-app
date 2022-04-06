import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ViewUser = () => {
  import("./userstyle.css");
  const { id } = useParams();
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    website: "",
    phone: "",
  });

  const viewUser = async () => {
    const { data } = await axios.get(`http://localhost:4000/user/${id}`);
    setuser(data);
    console.log(user);
  };

  return (
    <div>
      <div className="container">
        <div className="col-md-6 offset-3">
          <button
            className="btn btn-success btn-sm mb-5 mt-3"
            onClick={viewUser}
          >
            VIEW USER INFO
          </button>

          <ul className="list-group">
            <li className="list-group-item">name: {user.name}</li>
            <li className="list-group-item">username: {user.username}</li>
            <li className="list-group-item">email: {user.email}</li>
            <li className="list-group-item">website: {user.website}</li>
          </ul>
          {
            <Link className="btn btn-primary mt-5 btn-sm" to="/">
              Back To Home
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
