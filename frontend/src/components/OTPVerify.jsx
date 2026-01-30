import Input from "./Input";

export default function OTPVerify({ otp, setOtp }) {
  return (
    <div>
      <Input
        placeholder="Enter OTP sent to email"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
    </div>
  );
}
