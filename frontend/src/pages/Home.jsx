// // function Home() {
// //   return (
// //     <div>
// //       <h2>Welcome to CivicChain</h2>
// //       <p>Blockchain-based Secure Voting System</p>
// //     </div>
// //   );
// // }


// // export default Home;
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div style={{ padding: "40px", textAlign: "center" }}>
//       <h1>Welcome to Voting 2026</h1>
//       <p>Secure • Transparent • Biometric Blockchain Voting</p>

//       <div style={{ marginTop: "30px" }}>
//         <Link to="/login">
//           <button style={btnStyle}>Login</button>
//         </Link>

//         <Link to="/register">
//           <button style={btnStyle}>Register</button>
//         </Link>

//         <Link to="/dates">
//           <button style={btnStyle}>Important Dates</button>
//         </Link>

//         <Link to="/notice">
//           <button style={btnStyle}>Voter Notice</button>
//         </Link>

//         <Link to="/about">
//           <button style={btnStyle}>About</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// const btnStyle = {
//   margin: "10px",
//   padding: "12px 20px",
//   fontSize: "16px",
//   cursor: "pointer",
// };

// export default Home;


import { Link } from "react-router-dom";

export default function Home() {
   return (
     <div className="container">
       <h1>Welcome to Voting 2026</h1>
       <p style={{ textAlign: "center" }}>
         CivicChain – Secure, Biometric & Blockchain-based Voting
       </p>

       <div className="nav">
         <Link to="/register">Register</Link>
         <Link to="/login">Login</Link>
         <Link to="/dates">Dates</Link>
         <Link to="/notice">Notice</Link>
         <Link to="/about">About</Link>
       </div>
     </div>
   );
 }


//temporary checking 
// export default function Home() {
//   return (
//     <div style={{ color: "black", padding: "50px" }}>
//       <h1>HOME PAGE TEST</h1>
//       <p>If you see this, CSS is the issue.</p>
//     </div>
//   );
// }
