import Input from "./Input";
import Button from "./Button";

export default function LoginComponent({ onLogin }) {
  return (
    <>
      <Input placeholder="Voter ID" />
      <Input placeholder="Password" type="password" />
      <Button text="Login" onClick={onLogin} />
    </>
  );
}
