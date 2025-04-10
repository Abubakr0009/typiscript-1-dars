import axios from "axios";
import "./App.css";
// import { Person } from "./type/Person";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";


function App() {
  const [users, setUsers] = useState<Person[]>([]);

  async function getData() {
    const res = await axios.get("https://dummyjson.com/users");
    setUsers(res.data.users);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />

      <div>
        {users.map((user: Person) => (
          <div key={user.id} className="user-container">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email">{user.email}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
