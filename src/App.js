import Navbar from "./json server/Navbar";
import Contract from "./json server/Contract";
import About from "./json server/About";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import AddUser from "./users/AddUser";
import Home from "./json server/Home";

import View from "./users/ViewUser";
import EditUser from "./users/EditUser";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contract" component={Contract} />
        <Route path="/users/AddUser" component={AddUser} />
        <Route path="/users/viewUser/:id" component={View} />
        <Route path="/users/EditUser/:id" component={EditUser} />
      </div>
    </div>
  );
}

export default App;
