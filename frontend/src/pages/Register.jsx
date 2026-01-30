// // // function Register() {
// // //   return (
// // //     <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
// // //       <h2>CivicChain – Voter Registration</h2>

// // //       <label>Full Name</label>
// // //       <input type="text" placeholder="Enter your name" style={{ width: "100%", marginBottom: "10px" }} />

// // //       <label>Email Address</label>
// // //       <input type="email" placeholder="Enter email" style={{ width: "100%", marginBottom: "10px" }} />

// // //       <label>Voter ID</label>
// // //       <input type="text" placeholder="Enter Voter ID" style={{ width: "100%", marginBottom: "10px" }} />

// // //       <label>Face Capture</label>
// // //       <div style={{ border: "1px solid black", padding: "20px", marginBottom: "10px" }}>
// // //         Webcam feed placeholder
// // //       </div>

// // //       <button style={{ padding: "10px", width: "100%" }}>
// // //         Register Voter
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // export default Register;

// // import FaceCapture from "../components/FaceCapture";
// // import WebcamFeed from "../components/FaceCapture";

// // function Register() {
// //   return (
// //     <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
// //       <h2>CivicChain – Voter Registration</h2>

// //       <label>Full Name</label>
// //       <input type="text" style={{ width: "100%", marginBottom: "10px" }} />

// //       <label>Email Address</label>
// //       <input type="email" style={{ width: "100%", marginBottom: "10px" }} />

// //       <label>Voter ID</label>
// //       <input type="text" style={{ width: "100%", marginBottom: "15px" }} />

// //       <label>Live Face Capture</label>
// //       <FaceCapture />

// //       <button style={{ marginTop: "20px", padding: "10px", width: "100%" }}>
// //         Register Voter
// //       </button>
// //     </div>
// //   );
// // }

// // export default Register;



 import { useLocation } from "react-router-dom";
 import WebcamFeed from "../components/FaceCapture";

 function Register() {
   const location = useLocation();
   const voted = location.state?.voted;

   return (
     <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
       <h2>CivicChain – Voter Registration</h2>

       {voted && (
         <div
           style={{
             backgroundColor: "#d4edda",
             padding: "10px",
             marginBottom: "15px",
             borderRadius: "5px",
             color: "#155724",
           }}
         >
           ✅ Thank you for voting! Your vote has been securely recorded.
         </div>
       )}

       <label>Full Name</label>
       <input type="text" style={{ width: "100%", marginBottom: "10px" }} />

       <label>Email Address</label>
       <input type="email" style={{ width: "100%", marginBottom: "10px" }} />

       <label>Voter ID</label>
       <input type="text" style={{ width: "100%", marginBottom: "15px" }} />

       <label>Live Face Capture</label>
       <WebcamFeed />

       <button style={{ marginTop: "20px", padding: "10px", width: "100%" }}>
         Register Voter
       </button>
     </div>
   );
 }

 export default Register;

//2nd update woking aber not working 
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const navigate = useNavigate();

//   return (
//     <div className="container">
//       <h2>Voter Registration</h2>
//       <input placeholder="Full Name" />
//       <input placeholder="Email" />
//       <input placeholder="Voter ID" />
//       <input type="password" placeholder="Password" />
//       <button onClick={() => navigate("/login")}>
//         Register
//       </button>
//     </div>
//   );
// }

//3rd update

// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="auth-card">
//       <h2>Register</h2>
//       <input placeholder="Full Name" />
//       <input placeholder="Email" />
//       <input placeholder="Password" />
//       <button onClick={() => navigate("/login")}>
//         Register
//       </button>
//     </div>
//   );
// };

// export default Register;
