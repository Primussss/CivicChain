export default function AuthCard({ title, children }) {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        padding: "30px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ textAlign: "center", color: "#E34234" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
