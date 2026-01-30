// // // import { useNavigate } from "react-router-dom";

// // // export default function Authenticate() {
// // //   const navigate = useNavigate();

// // //   return (
// // //     <div className="container">
// // //       <h2>Biometric Verification</h2>

// // //       <div style={{
// // //         height: "200px",
// // //         background: "#ddd",
// // //         borderRadius: "10px",
// // //         display: "flex",
// // //         alignItems: "center",
// // //         justifyContent: "center"
// // //       }}>
// // //         Live Face Scan Area
// // //       </div>

// // //       <input placeholder="Enter OTP sent to Email" />
// // //       <button onClick={() => navigate("/vote")}>
// // //         Verify & Proceed
// // //       </button>
// // //     </div>
// // //   );
// // // }
// // import AuthCard from "../components/AuthCard";
// // import FaceCapture from "../components/FaceCapture";
// // import OTPVerify from "../components/OTPVerify";
// // import Button from "../components/Button";
// // import { useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // export default function Authenticate() {
// //   const navigate = useNavigate();
// //   const [otp, setOtp] = useState("");

// //   return (
// //     <AuthCard title="Biometric Verification">
// //       <FaceCapture />
// //       <OTPVerify otp={otp} setOtp={setOtp} />
// //       <Button
// //         text="Verify & Proceed"
// //         onClick={() => navigate("/vote")}
// //         disabled={!otp}
// //       />
// //     </AuthCard>
// //   );
// // }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthCard from "../components/AuthCard";
// import FaceCapture from "../components/FaceCapture";
// import OTPVerify from "../components/OTPVerify";
// import Button from "../components/Button";

// export default function Authenticate() {
//   const navigate = useNavigate();
//   const [faceVerified, setFaceVerified] = useState(false);
//   const [otp, setOtp] = useState("");

//   return (
//     <AuthCard title="Biometric Verification">
//       <FaceCapture onVerified={setFaceVerified} />

//       {faceVerified && (
//         <>
//           <OTPVerify otp={otp} setOtp={setOtp} />
//           <Button
//             text="Verify & Proceed"
//             onClick={() => navigate("/vote")}
//             disabled={!otp}
//           />
//         </>
//       )}
//     </AuthCard>
//   );
// }

//all working code till face caputre and blink detection but no otp 
//  import { useState, useEffect } from "react";
//  import { useNavigate } from "react-router-dom";
// import AuthCard from "../components/AuthCard";
//  import FaceCapture from "../components/FaceCapture";

//  export default function Authenticate() {
//    const navigate = useNavigate();
//    const [faceVerified, setFaceVerified] = useState(false);

//    useEffect(() => {
//    if (faceVerified) {
//      fetch("http://localhost:8000/send-otp", {
//        method: "POST",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify({ email: "abhighadmode1@gmail.com" }) // replace later
//      });

//      setTimeout(() => {
//        navigate("/otp");
//      }, 1000);
//    }
//  }, [faceVerified, navigate]);



//    return (
//      <AuthCard title="Biometric Verification">
//        <FaceCapture onVerified={setFaceVerified} />

//        {faceVerified && (
//          <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
//            Identity verified. Redirecting to voting page...
//          </p>
//        )}
//      </AuthCard>
//    );
//  }


//2nd update wokrin gbut not working 
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthCard from "../components/AuthCard";
// import FaceCapture from "../components/FaceCapture";

// export default function Authenticate() {
//   const navigate = useNavigate();

//   const [faceVerified, setFaceVerified] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);

//   useEffect(() => {
//     if (faceVerified && !otpSent) {
//       setOtpSent(true); // 🔒 prevent multiple calls

//       fetch("http://localhost:8000/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: "abhighadmode1@gmail.com" // later dynamic
//         }),
//       })
//         .then(() => {
//           setTimeout(() => {
//             navigate("/otp");
//           }, 1200);
//         })
//         .catch((err) => {
//           console.error("OTP error:", err);
//         });
//     }
//   }, [faceVerified, otpSent, navigate]);

//   return (
//     <AuthCard title="Biometric Verification">
//       {!faceVerified && (
//         <FaceCapture onVerified={() => setFaceVerified(true)} />
//       )}

//       {faceVerified && (
//         <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
//           Face verified successfully. Sending OTP...
//         </p>
//       )}
//     </AuthCard>
//   );
// }


//3rd update
// import FaceCapture from "../components/FaceCapture";
// import { useNavigate } from "react-router-dom";

// const Authenticate = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2>Face Verification</h2>
//       <FaceCapture onVerified={() => navigate("/otp")} />
//     </div>
//   );
// };

// export default Authenticate;


//new update from home till otp operration but not so working 
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthCard from "../components/AuthCard";
// import FaceCapture from "../components/FaceCapture";

// export default function Authenticate() {
//   const navigate = useNavigate();
//   const [faceVerified, setFaceVerified] = useState(false);

//   useEffect(() => {
//     if (!faceVerified) return;

//     // 1️⃣ Send OTP immediately after face verification
//     fetch("http://localhost:8000/send-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: "abhighadmode1@gmail.com" // later replace with logged-in user email
//       }),
//     })
//       .then(() => {
//         // 2️⃣ Navigate to OTP page after OTP is sent
//         navigate("/otp");
//       })
//       .catch(() => {
//         alert("Failed to send OTP");
//       });
//   }, [faceVerified, navigate]);

//   return (
//     <AuthCard title="Biometric Verification">
//       <FaceCapture onVerified={setFaceVerified} />

//       {faceVerified && (
//         <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
//           Face verified. Sending OTP...
//         </p>
//       )}
//     </AuthCard>
//   );
// }


//trying to fix the auto redirect to otp 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import FaceCapture from "../components/FaceCapture";

export default function Authenticate() {
  const navigate = useNavigate();
  const [faceVerified, setFaceVerified] = useState(false);
  const [status, setStatus] = useState("waiting"); 
  // waiting | verified | sending

  useEffect(() => {
    if (!faceVerified) return;

    // Step 1: Show success message
    setStatus("verified");

    // Step 2: Small delay for UX clarity
    const timer = setTimeout(async () => {
      setStatus("sending");

      try {
        await fetch("http://localhost:8000/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "abhighadmode1@gmail.com", // replace later with logged-in email
          }),
        });

        // Step 3: Redirect to OTP page
        navigate("/otp");
      } catch {
        alert("Failed to send OTP");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [faceVerified, navigate]);

  return (
    <AuthCard title="Biometric Verification">
      <FaceCapture onVerified={setFaceVerified} />

      {status === "verified" && (
        <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
          ✅ Face detected successfully
        </p>
      )}

      {status === "sending" && (
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Sending OTP…
        </p>
      )}
    </AuthCard>
  );
}
