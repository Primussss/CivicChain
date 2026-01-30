// function Dates() {
//   return (
//     <div style={{ padding: "40px", textAlign: "center" }}>
//       <h2>Important Election Dates</h2>
//       <p>Voter Registration: Coming Soon</p>
//       <p>Voting Day: 2026</p>
//     </div>
//   );
// }

// export default Dates;

export default function Dates() {
  return (
    <div className="container">
      <h2>Important Dates</h2>
      <ul>
        <li>Registration Ends: 10 March 2026</li>
        <li>Voting Day: 15 March 2026</li>
        <li>Results: 20 March 2026</li>
      </ul>
    </div>
  );
}
