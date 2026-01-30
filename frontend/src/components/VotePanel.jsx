import { useState } from "react";
import Button from "./Button";

export default function VotePanel({ onSubmit }) {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <label>
        <input type="radio" name="vote" onChange={() => setSelected("Alice")} /> Alice
      </label><br />

      <label>
        <input type="radio" name="vote" onChange={() => setSelected("Bob")} /> Bob
      </label><br />

      <label>
        <input type="radio" name="vote" onChange={() => setSelected("Charlie")} /> Charlie
      </label>

      <Button
        text="Cast Vote"
        disabled={!selected}
        onClick={() => onSubmit(selected)}
      />
    </div>
  );
}
