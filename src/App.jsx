import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Errorpage from "./pages/Errorpage";
import Dashboard from "./pages/Dashboard";
import Addexperience from "./pages/Addexperience";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import axios from "axios";
import Showblog from "./pages/Showblog";
import Blogs from "./pages/Blogs";
import Contactus from "./pages/Contactus";
import About from "./pages/About";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [callCount,setCallCount]=useState(0);
  // const [user, setUser] = useState(()=>{
  //   isLoggedin();
  // });
  const [user, setUser] = useState({
    isAdmin:false,
  });

  useEffect(() => {
    if(callCount==0){
      isLoggedin();
    }
  });
  function isLoggedin() {
    axios.get("/getUserInfo").then((res) => {
      console.log(res.data);
      setLogin(res.data.isLoggedin);
      setUser(res.data.user);
      setCallCount(callCount+1);
    });
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Homepage
          isLogin={isLogin}
          setLogin={setLogin}
          user={user}
          setUser={setUser}
        />
      ),
      errorElement: <Errorpage />,
    },
    {
      path: "/login",
      element: (
        <Login
          isLogin={isLogin}
          setLogin={setLogin}
          user={user}
          setUser={setUser}
        />
      ),
    },
    {
      path: "/addexperience",
      element: (
        <Addexperience
          isLogin={isLogin}
          setLogin={setLogin}
          user={user}
          setUser={setUser}
        />
      ),
    },
    {
      path: "/blogs",
      element: (
        <Blogs
          isLogin={isLogin}
          setLogin={setLogin}
          user={user}
          setUser={setUser}
        />
      ),
    },

    {
      path: "/showblog/:id",
      element: (
        <Showblog
          isLogin={isLogin}
          setLogin={setLogin}
          user={user}
          setUser={setUser}
        />
      ),
    },
    {
      path: "/team",
      element: (
        <About
          isLogin={isLogin}
          setLogin={setLogin}
          user={user}
          setUser={setUser}
        />
      ),
    },
    {
      path: "/dashboard",
      element: (
        <Dashboard
          isLogin={isLogin}
          setLogin={setLogin}
          user={user}
          setUser={setUser}
        />
      ),
    },
    {
      path: "/contact",
      element: (
        <Contactus
          isLogin={isLogin}
          setLogin={setLogin}
          user={user}
          setUser={setUser}
        />
      ),
    },
  ]);

  return (
    <div>
      
      <RouterProvider router={router} />
      
      <Footer />
      
    </div>
  );

  
}

export default App;
