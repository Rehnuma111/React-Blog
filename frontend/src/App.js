import AboutUs from "./Component/AboutUs";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import SinglePost from "./Component/SinglePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogPost from "./pages/BlogPost";
import UserProfile from "./pages/UserProfile";
import  Pagination  from "./Component/Pagination";


function App() {
  return (
    <BrowserRouter>
      <Header />/
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/singlePost" element={<SinglePost />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/Login" element={<Login />} />   
        <Route path="/Signup" element={<Signup />} /> 
        <Route path="/blogpost" element={<BlogPost />} />
        <Route path="/profile" element={<UserProfile/>} />

           
      </Routes>
      {/* <Footer /> */}
      <Pagination/>
    </BrowserRouter>
  );
}

export default App;
