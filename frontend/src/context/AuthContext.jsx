// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [faceVerified, setFaceVerified] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [hasVoted, setHasVoted] = useState(false);

//   return (
//     <AuthContext.Provider
//       value={{
//         faceVerified,
//         setFaceVerified,
//         otpVerified,
//         setOtpVerified,
//         hasVoted,
//         setHasVoted,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
