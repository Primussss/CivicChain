// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // import Register from "./pages/Register";
// // import Vote from "./pages/Vote";

// // function App() {
// //   return (
// //     <Router>
// //       <nav style={{ padding: "10px" }}>
// //         <Link to="/register">Register</Link> |{" "}
// //         <Link to="/vote">Vote</Link>
// //       </nav>

// //       <Routes>
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/vote" element={<Vote />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

//  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  import Home from "./pages/Home";
//  import Login from "./pages/Login";
//  import Register from "./pages/Register";
//  import Vote from "./pages/Vote";
//  import Dates from "./pages/Dates";
//  import Notice from "./pages/Notice";
//  import About from "./pages/About";

//  function App() {
//    return (
//      <Router>
//        <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/login" element={<Login />} />
//          <Route path="/register" element={<Register />} />
//          <Route path="/vote" element={<Vote />} />
//          <Route path="/dates" element={<Dates />} />
//          <Route path="/notice" element={<Notice />} />
//          <Route path="/about" element={<About />} />
//        </Routes>
//      </Router>
//    );
//  }

//  export default App;


//2nd update 
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "./pages/Home";
 import Register from "./pages/Register";
 import Login from "./pages/Login";
 import Authenticate from "./pages/Authenticate";
 import Vote from "./pages/Vote";
 import Confirmation from "./pages/Confirmation";
 import Dates from "./pages/Dates";
 import Notice from "./pages/Notice";
 import About from "./pages/About";
 import OTPVerify from "./pages/OTPVerify";


  function App() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/authenticate" element={<Authenticate />} />
         <Route path="/vote" element={<Vote />} />
         <Route path="/confirmation" element={<Confirmation />} />
         <Route path="/dates" element={<Dates />} />
         <Route path="/notice" element={<Notice />} />
         <Route path="/about" element={<About />} />
         <Route path="/otp" element={<OTPVerify />} />

       </Routes>
     </BrowserRouter>
   );
 }

 export default App;

//3rd update

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Authenticate from "./pages/Authenticate";
// import OTPVerify from "./pages/Confirmation";
// import Vote from "./pages/Vote";
// import About from "./pages/About";
// import Dates from "./pages/Dates";
// import Notice from "./pages/Notice";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/authenticate" element={<Authenticate />} />
//       <Route path="/otp" element={<OTPVerify />} />
//       <Route path="/vote" element={<Vote />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/dates" element={<Dates />} />
//       <Route path="/notice" element={<Notice />} />
//     </Routes>
//   );
// }

// export default App;
