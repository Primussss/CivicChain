
//2nd update
 import { Link } from "react-router-dom";

 export default function Confirmation() {
   return (
     <div className="container">
       <h2>Thank You!</h2>
       <p>Your vote has been securely recorded on the blockchain.</p>
       <Link to="/">Return to Home</Link>
     </div>
   );
 }

//3rd update
// import { useNavigate } from "react-router-dom";

// const OTPVerify = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="auth-card">
//       <h2>OTP Verification</h2>
//       <input placeholder="Enter OTP" />
//       <button onClick={() => navigate("/vote")}>
//         Verify OTP
//       </button>
//     </div>
//   );
// };

// export default OTPVerify;

