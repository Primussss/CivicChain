export default function Input({ placeholder, type = "text", value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "12px",
        marginTop: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc"
      }}
    />
  );
}
