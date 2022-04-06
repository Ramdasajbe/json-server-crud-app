import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [state, setstate] = useState([]);
  const getdata = async () => {
    const { data } = await axios.get("http://localhost:4000/user");
    setstate(data.reverse());
  };
  useEffect(() => {
    getdata();
  }, []);
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/user/${id}`);
    getdata();
  };

  return (
    <div>
      <table class="table border table-striped table-bordered my-3">
        <thead>
          <tr>
            <th scope="col">Sr.no</th>
            <th scope="col">Name</th>
            <th scope="col">username</th>
            <th scope="col">Email</th>

            <th scope="col">phone Number</th>
            <th scope="col">Website</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((element, index) => (
            <tr>
              <th scope="row">{index + 1}</th>

              <td key={index}>{element.name}</td>
              <td key={index}>{element.username}</td>
              <td key={index}>{element.email}</td>
              <td key={index}>{element.phone}</td>
              <td key={index}>{element.website}</td>
              <td>
                <Link
                  className="btn btn-primary btn-sm"
                  to={`/users/ViewUser/${element.id}`}
                >
                  View
                </Link>

                <Link
                  className="btn btn-warning btn-sm my-2 mx-2"
                  to={`/users/EditUser/${element.id}`}
                >
                  edit
                </Link>
                <Link
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(element.id)}
                >
                  delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
