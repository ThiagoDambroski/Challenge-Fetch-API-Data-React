import Posts from "./Posts";
import Users from "./Users"
import Comments from "./Comments"
import { useState } from "react";
import './index.css'

function App() {

  const [activePage, setActivePage] = useState(0)

  const setPost = () => {
    setActivePage(0)
  }

  const setUsers = () => {
    setActivePage(1)
  }

  const setComments = () => {
    setActivePage(2)
  }

  return (
    <>
      <div>
        <div className="buttons">
          <button onClick={setPost} className={activePage === 0 ? "active" : ""}>Post</button>
          <button onClick={setUsers} className={activePage === 1 ? "active" : ""}>Users</button>
          <button onClick={setComments} className={activePage === 2 ? "active" : ""}>Comments</button>
        </div>
        
        {activePage === 0 && <Posts/> }
        {activePage === 1 && <Users/>}
        {activePage === 2 && <Comments/>}
      </div>
    </>
  );
}

export default App;
