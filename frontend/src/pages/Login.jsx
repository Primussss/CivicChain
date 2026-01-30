// import "../styles/global.css";

// export default function Login() {
//   return (
//     <div style={styles.wrapper}>
//       <h1 style={styles.title}>
//         CivicChain – Secure Digital Voting
//       </h1>

//       <div style={styles.card}>
//         <h2 style={styles.cardTitle}>Voter Login</h2>

//         <label style={styles.label}>Voter ID</label>
//         <input type="text" placeholder="Enter Voter ID" style={styles.input} />

//         <label style={styles.label}>Password</label>
//         <input type="password" placeholder="Enter Password" style={styles.input} />

//         <button style={styles.button}>Proceed to Verification</button>

//         <p style={styles.note}>
//           Biometric verification & OTP required before voting
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   wrapper: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "linear-gradient(135deg, #FAF7F2, #F1E8DB)",
//   },
//   title: {
//     marginBottom: "24px",
//     fontWeight: "600",
//   },
//   card: {
//     width: "380px",
//     background: "#fff",
//     padding: "32px",
//     borderRadius: "10px",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//   },
//   cardTitle: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   label: {
//     fontSize: "14px",
//     marginBottom: "4px",
//     display: "block",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "14px",
//     borderRadius: "6px",
//     border: "1px solid #E6DED3",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     background: "#E24A33",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "15px",
//   },
//   note: {
//     marginTop: "12px",
//     fontSize: "12px",
//     textAlign: "center",
//     opacity: 0.8,
//   },
// };


//100 percent working 
//  import { useNavigate } from "react-router-dom";

//  export default function Login() {
//    const navigate = useNavigate();

//    return (
//      <div className="container">
//        <h2>Login</h2>
//        <input placeholder="Voter ID" />
//        <input type="password" placeholder="Password" />
//        <button onClick={() => navigate("/authenticate")}>
//          Login
//        </button>
//      </div>
//    );
//  }

//updated working 
 import { useNavigate } from "react-router-dom";

 const Login = () => {
   const navigate = useNavigate();

   const handleLogin = (e) => {
     e.preventDefault();

     // simulate successful login
     navigate("/Authenticate"); // 👈 THIS WAS MISSING
   };

   return (
     <form onSubmit={handleLogin}>
       <input placeholder="Email" />
       <input placeholder="Password" type="password" />
       <button type="submit">Login</button>
     </form>
   );
 };

 export default Login;

//3rd update
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate("/authenticate");
//   };

//   return (
//     <div className="auth-card">
//       <h2>Login</h2>
//       <input placeholder="Email" />
//       <input type="password" placeholder="Password" />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

