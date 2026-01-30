// function Notice() {
//   return (
//     <div style={{ padding: "40px", textAlign: "center" }}>
//       <h2>Voter Notice</h2>
//       <p>Please ensure your details are correct before voting.</p>
//     </div>
//   );
// }

// export default Notice;

export default function Notice() {
  return (
    <div className="container">
      <h2>Voter Notice</h2>
      <p>
        Voting is allowed only once. Biometric verification is mandatory.
      </p>
    </div>
  );
}
