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

//working code till face capture
// import { useLocation } from "react-router-dom";
//  import WebcamFeed from "../components/FaceCapture";

//  function Register() {
//    const location = useLocation();
//    const voted = location.state?.voted;

//    return (
//      <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
//        <h2>CivicChain – Voter Registration</h2>

//        {voted && (
//          <div
//            style={{
//              backgroundColor: "#d4edda",
//              padding: "10px",
//              marginBottom: "15px",
//              borderRadius: "5px",
//              color: "#155724",
//            }}
//          >
//            ✅ Thank you for voting! Your vote has been securely recorded.
//          </div>
//        )}

//        <label>Full Name</label>
//        <input type="text" style={{ width: "100%", marginBottom: "10px" }} />

//        <label>Email Address</label>
//        <input type="email" style={{ width: "100%", marginBottom: "10px" }} />

//        <label>Voter ID</label>
//        <input type="text" style={{ width: "100%", marginBottom: "15px" }} />

//        <label>Live Face Capture</label>
//        <WebcamFeed />

//        <button style={{ marginTop: "20px", padding: "10px", width: "100%" }}>
//          Register Voter
//        </button>
//      </div>
//    );
//  }

//  export default Register;

//moving forward with email and otp
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FaceCapture from "../components/FaceCapture";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    voterId: "",
    password: "",
  });

  const [faceVerified, setFaceVerified] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError("");

    // 1️⃣ Validate fields
    if (!form.name || !form.email || !form.voterId || !form.password) {
      setError("All fields are compulsory");
      return;
    }

    if (!faceVerified) {
      setError("Please complete face verification");
      return;
    }

    // 2️⃣ Send OTP
    try {
      await fetch("http://localhost:8000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });

      // 3️⃣ Go to OTP page with registration data
      navigate("/otp", {
        state: {
          mode: "register",
          formData: form,
        },
      });
    } catch {
      setError("Failed to send OTP");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h2>CivicChain – Voter Registration</h2>

      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        onChange={handleChange}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        name="voterId"
        placeholder="Voter ID"
        onChange={handleChange}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        name="password"
        type="password"
        placeholder="Create Password"
        onChange={handleChange}
        style={{ width: "100%", marginBottom: "15px" }}
      />

      <h4>Live Face Verification</h4>
      {/* <FaceCapture onVerified={setFaceVerified} /> just changed the line */} 
  {/* below this the lines are changed */}
      <FaceCapture onVerified={() => setFaceVerified(true)} />
      {faceVerified && (
  <p style={{ color: "green", marginTop: "10px" }}>
    ✅ Face verified successfully
  </p>
)}
{/* till here  */}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        onClick={handleRegister}
        disabled={!faceVerified}
        style={{
          marginTop: "20px",
          padding: "12px",
          width: "100%",
          backgroundColor: faceVerified ? "#2c7be5" : "#aaa",
          color: "white",
          border: "none",
          cursor: faceVerified ? "pointer" : "not-allowed",
        }}
      >
        Register Voter
      </button>
    </div>
  );
}

