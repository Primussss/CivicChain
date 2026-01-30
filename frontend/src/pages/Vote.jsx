 import { useState } from "react";
 import { useNavigate } from "react-router-dom";

 function Vote() {
   const [selectedCandidate, setSelectedCandidate] = useState("");
   const navigate = useNavigate();

   const handleVote = () => {
     if (!selectedCandidate) {
       alert("Please select a candidate before voting.");
       return;
     }

     alert(`Vote successfully cast for ${selectedCandidate}`);

     // Redirect to Register page after vote
     navigate("/register", {
       state: { voted: true },
     });
   };

   return (
     <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
       <h2>CivicChain – Secure Voting</h2>
       <p>Please select one candidate:</p>

       <div>
         <input
           type="radio"
           name="candidate"
           value="Candidate A"
           onChange={(e) => setSelectedCandidate(e.target.value)}
         />{" "}
         Candidate A
       </div>

       <div>
         <input
           type="radio"
           name="candidate"
           value="Candidate B"
           onChange={(e) => setSelectedCandidate(e.target.value)}
         />{" "}
         Candidate B
       </div>

       <div>
         <input
           type="radio"
           name="candidate"
           value="Candidate C"
           onChange={(e) => setSelectedCandidate(e.target.value)}
         />{" "}
         Candidate C
       </div>

       <button
         onClick={handleVote}
         style={{
           marginTop: "20px",
           padding: "12px",
           width: "100%",
           backgroundColor: "#2c7be5",
           color: "white",
           border: "none",
           borderRadius: "5px",
         }}
       >
         Cast Vote
       </button>
     </div>
   );
 }

 export default Vote;

//2nd update
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";


// export default function Vote() {
//   const navigate = useNavigate();
//   const [vote, setVote] = useState("");
//   const Vote = () => {
//   const { otpVerified, hasVoted, setHasVoted } = useAuth();
//   const navigate = useNavigate();

//   if (!otpVerified) {
//     navigate("/login");
//     return null;
//   }

//   const handleVote = () => {
//     setHasVoted(true);
//     alert("Thank you for voting!");
//     navigate("/register");
//   };
//   return (
//     <div className="container">
//       <h2>Cast Your Vote</h2>

//       <label>
//         <input type="radio" name="vote" onChange={() => setVote("Alice")} /> Alice
//       </label><br />

//       <label>
//         <input type="radio" name="vote" onChange={() => setVote("Bob")} /> Bob
//       </label><br />

//       <label>
//         <input type="radio" name="vote" onChange={() => setVote("Charlie")} /> Charlie
//       </label>

//       <button
//         disabled={!vote}
//         onClick={() => navigate("/confirmation")}
//       >
//         Cast Vote
//       </button>
//     </div>
//   );
// }
// }

//3rd update
// import { useNavigate } from "react-router-dom";

// const Vote = () => {
//   const navigate = useNavigate();

//   const castVote = () => {
//     alert("Thank you for voting!");
//     navigate("/register");
//   };

//   return (
//     <div>
//       <h2>Cast Your Vote</h2>
//       <button onClick={castVote}>Vote for Candidate A</button>
//     </div>
//   );
// };

// export default Vote;
