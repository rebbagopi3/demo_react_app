import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Pagenotfoun from "./components/Pagenotfoun";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Pagenotfoun/>} />
      </Routes>
      <Footer />
    </Router>

    
    
    
  );
};

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import HomePage from "./components/Homepage";
// import StudentList from "./components/StudentList";
// import Pagenotfoun from "./components/Pagenotfoun";


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<LandingPage />} /> */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/studentlist" element={<StudentList />} />

//         <Route path="*" element={<Pagenotfoun/>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


