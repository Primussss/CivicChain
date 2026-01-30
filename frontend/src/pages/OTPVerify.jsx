// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthCard from "../components/AuthCard";
// import Input from "../components/Input";
// import Button from "../components/Button";

// export default function OTPVerify() {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");

//   const verifyOtp = async () => {
//     // TEMP MOCK (backend comes next)
//     if (otp === "123456") {
//       navigate("/vote");
//     } else {
//       setError("Invalid OTP. Please try again.");
//     }
//   };

//   return (
//     <AuthCard title="OTP Verification">
//       <p style={{ textAlign: "center" }}>
//         Enter the OTP sent to your registered email
//       </p>

//       <Input
//         placeholder="Enter 6-digit OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//       />

//       {error && (
//         <p style={{ color: "red", textAlign: "center" }}>{error}</p>
//       )}

//       <Button text="Verify OTP" onClick={verifyOtp} />
//     </AuthCard>
//   );
// }

//working but problematic code
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthCard from "../components/AuthCard";
// import Input from "../components/Input";
// import Button from "../components/Button";
// import { useAuth } from "../context/AuthContext";

// export default function OTPVerify() {
//   const navigate = useNavigate();
//   const { faceVerified, setOtpVerified, email } = useAuth();

//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🔒 Route protection: face must be verified first
//   useEffect(() => {

//     const { faceVerified, setOtpVerified } = useAuth();
// const navigate = useNavigate();

// if (!faceVerified) {
//   navigate("/authenticate");
// }

//     // if (!faceVerified) {
//     //   navigate("/authenticate");
//     // }
//   }, [faceVerified, navigate]);

//   const verifyOtp = async () => {
//     setError("");

//     if (!otp || otp.length !== 6) {
//       setError("OTP must be exactly 6 digits");
//       return;
//     }

//     if (!email) {
//       setError("Session expired. Please login again.");
//       navigate("/login");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:8000/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           email: email,
//           otp: otp
//         })
//       });

//       const data = await res.json();

//       if (data.status === "success") {
//         setOtpVerified(true);
//         navigate("/vote");
//       } else {
//         setError(data.reason || "Invalid OTP");
//       }
//     } catch (err) {
//       setError("Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthCard title="OTP Verification">
//       <p>Enter the 6-digit OTP sent to your registered email</p>

//       <Input
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         maxLength={6}
//       />

//       {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

//       <Button
//         text={loading ? "Verifying..." : "Verify OTP"}
//         onClick={verifyOtp}
//         disabled={loading}
//       />
//     </AuthCard>
//   );
// }

//update after the all the codes were given from home 
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthCard from "../components/AuthCard";
// import Input from "../components/Input";
// import Button from "../components/Button";

// export default function OTPVerify() {
//   const navigate = useNavigate();

//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const verifyOtp = async () => {
//     setError("");

//     if (!otp || otp.length !== 6) {
//       setError("OTP must be exactly 6 digits");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:8000/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: "abhighadmode1@gmail.com", // same email used in send-otp
//           otp: otp,
//         }),
//       });

//       const data = await res.json();

//       if (data.status === "success") {
//         navigate("/vote");
//       } else {
//         setError("Invalid OTP");
//       }
//     } catch {
//       setError("Server error. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthCard title="OTP Verification">
//       <p>Enter the 6-digit OTP sent to your email</p>

//       <Input
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         maxLength={6}
//       />

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <Button
//         text={loading ? "Verifying..." : "Verify OTP"}
//         onClick={verifyOtp}
//       />
//     </AuthCard>
//   );
// }


//updated otp function code on 30th jan but no chnage working code can return anytime here
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthCard from "../components/AuthCard";
// import Input from "../components/Input";
// import Button from "../components/Button";

// export default function OTPVerify() {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const verifyOtp = async () => {
//     setError("");

//     if (otp.length !== 6) {
//       setError("OTP must be 6 digits");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:8000/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: "abhighadmode1@gmail.com",
//           otp: otp,
//         }),
//       });

//       const data = await res.json();

//       if (data.status === "success") {
//         navigate("/vote");
//       } else {
//         setError("Invalid OTP");
//       }
//     } catch {
//       setError("Server error. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthCard title="OTP Verification">
//       <p>Enter the OTP sent to your registered email</p>

//       <Input
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         maxLength={6}
//       />

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <Button
//         text={loading ? "Verifying..." : "Verify OTP"}
//         onClick={verifyOtp}
//       />
//     </AuthCard>
//   );
// }

//the otp and email code added
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import Button from "../components/Button";

export default function OTPVerify() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const mode = location.state?.mode;
  const formData = location.state?.formData;

  const verifyOtp = async () => {
    setError("");

    if (otp.length !== 6) {
      setError("OTP must be 6 digits");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "abhighadmode1@gmail.com",
          otp: otp,
        }),
      });

      const data = await res.json();

      if (data.status === "success") {
          if (mode === "register") {
  // Save user AFTER OTP verification
          await fetch("http://localhost:8000/register-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
      });

        navigate("/", {
    state: { registered: true },
       });
} else {
  navigate("/vote");
}
      } else {
        setError("Invalid OTP");
      }
    } catch {
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title="OTP Verification">
      <p>Enter the OTP sent to your registered email</p>

      <Input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        maxLength={6}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Button
        text={loading ? "Verifying..." : "Verify OTP"}
        onClick={verifyOtp}
      />
    </AuthCard>
  );
}
