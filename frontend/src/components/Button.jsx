export default function Button({ text, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: "#E34234",
        color: "white",
        padding: "12px",
        borderRadius: "6px",
        border: "none",
        fontWeight: "bold",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        width: "100%",
        marginTop: "12px"
      }}
    >
      {text}
    </button>
  );
}
