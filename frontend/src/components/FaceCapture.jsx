// // // // // import { useEffect, useRef } from "react";

// // // // // function FaceCapture() {
// // // // //   const videoRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     navigator.mediaDevices
// // // // //       .getUserMedia({ video: true })
// // // // //       .then((stream) => {
// // // // //         if (videoRef.current) {
// // // // //           videoRef.current.srcObject = stream;
// // // // //         }
// // // // //       })
// // // // //       .catch((err) => {
// // // // //         console.error("Camera access denied", err);
// // // // //       });
// // // // //   }, []);

// // // // //   return (
// // // // //     <video
// // // // //       ref={videoRef}
// // // // //       autoPlay
// // // // //       playsInline
// // // // //       style={{
// // // // //         width: "100%",
// // // // //         height: "250px",
// // // // //         border: "1px solid black",
// // // // //         borderRadius: "8px",
// // // // //       }}
// // // // //     />
// // // // //   );
// // // // // }

// // // // // export default FaceCapture;


// // // // export default function FaceCapture() {
// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         height: "220px",
// // // //         background: "#F5F0E6",
// // // //         border: "2px dashed #E34234",
// // // //         borderRadius: "10px",
// // // //         marginTop: "15px",
// // // //         display: "flex",
// // // //         alignItems: "center",
// // // //         justifyContent: "center",
// // // //         fontWeight: "bold",
// // // //         color: "#555"
// // // //       }}
// // // //     >
// // // //         Live Face Detection (Blink / Head Movement)
// // // //     </div>
// // // //   );
// // // // }

// // // import { useEffect, useRef, useState } from "react";
// // // import { FaceMesh } from "@mediapipe/face_mesh";
// // // import { Camera } from "@mediapipe/camera_utils";

// // // export default function FaceCapture({ onVerified }) {
// // //   const videoRef = useRef(null);
// // //   const canvasRef = useRef(null);
// // //   const [blinkCount, setBlinkCount] = useState(0);
// // //   const [verified, setVerified] = useState(false);

// // //   let eyeClosed = false;

// // //   useEffect(() => {
// // //     const faceMesh = new FaceMesh({
// // //       locateFile: (file) =>
// // //         `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
// // //     });

// // //     faceMesh.setOptions({
// // //       maxNumFaces: 1,
// // //       refineLandmarks: true,
// // //       minDetectionConfidence: 0.7,
// // //       minTrackingConfidence: 0.7,
// // //     });

// // //     faceMesh.onResults(onResults);

// // //     const camera = new Camera(videoRef.current, {
// // //       onFrame: async () => {
// // //         await faceMesh.send({ image: videoRef.current });
// // //       },
// // //       width: 640,
// // //       height: 480,
// // //     });

// // //     camera.start();

// // //     return () => camera.stop();
// // //   }, []);

// // //   const onResults = (results) => {
// // //     const canvas = canvasRef.current;
// // //     const ctx = canvas.getContext("2d");

// // //     ctx.clearRect(0, 0, canvas.width, canvas.height);
// // //     ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

// // //     if (results.multiFaceLandmarks?.length) {
// // //       const landmarks = results.multiFaceLandmarks[0];

// // //       // LEFT EYE landmarks
// // //       const upper = landmarks[159];
// // //       const lower = landmarks[145];

// // //       const eyeDist = Math.abs(upper.y - lower.y);

// // //       // Blink detection threshold
// // //       if (eyeDist < 0.004 && !eyeClosed) {
// // //         eyeClosed = true;
// // //       }

// // //       if (eyeDist > 0.007 && eyeClosed) {
// // //         eyeClosed = false;
// // //         setBlinkCount((prev) => prev + 1);
// // //       }

// // //       if (blinkCount >= 2 && !verified) {
// // //         setVerified(true);
// // //         onVerified(true);
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ textAlign: "center" }}>
// // //       <video
// // //         ref={videoRef}
// // //         autoPlay
// // //         muted
// // //         playsInline
// // //         width="640"
// // //         height="480"
// // //         style={{ display: "none" }}
// // //       />
// // //       <canvas
// // //         ref={canvasRef}
// // //         width="640"
// // //         height="480"
// // //         style={{
// // //           borderRadius: "10px",
// // //           border: verified ? "3px solid green" : "3px solid #E34234",
// // //         }}
// // //       />
// // //       <p>
// // //         {verified
// // //           ? "✅ Liveness Verified"
// // //           : "Please blink twice to verify liveness"}
// // //       </p>
// // //     </div>
// // //   );
// // // }

  import { useEffect, useRef, useState } from "react";
  import { FaceMesh } from "@mediapipe/face_mesh";
  import { Camera } from "@mediapipe/camera_utils";

  export default function FaceCapture({ onVerified }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const [started, setStarted] = useState(false);
    const [blinkCount, setBlinkCount] = useState(0);
    const [verified, setVerified] = useState(false);

    let eyeClosed = useRef(false);
    let lastBlinkTime = useRef(0);

    useEffect(() => {
      if (!started) return;

      const faceMesh = new FaceMesh({
        locateFile: (file) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
      });

      faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.6,
        minTrackingConfidence: 0.6,
      });

      faceMesh.onResults(onResults);

      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await faceMesh.send({ image: videoRef.current });
        },
        width: 400,
        height: 300,
      });

      camera.start();

      return () => camera.stop();
    }, [started]);

    const onResults = (results) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

      if (!results.multiFaceLandmarks) return;

      const lm = results.multiFaceLandmarks[0];

      // LEFT EYE landmarks (top & bottom)
      const top = lm[159];
      const bottom = lm[145];

      const eyeDistance = Math.abs(top.y - bottom.y);

      const now = Date.now();

      // Thresholds tuned for stability
      if (eyeDistance < 0.006 && !eyeClosed.current) {
        eyeClosed.current = true;
      }

      if (eyeDistance > 0.01 && eyeClosed.current) {
        if (now - lastBlinkTime.current > 500) {
          setBlinkCount((b) => b + 1);
          lastBlinkTime.current = now;
        }
        eyeClosed.current = false;
      }

      if (blinkCount >= 2 && !verified) {
        setVerified(true);
        onVerified(true);
      }
    };

    return (
      <div style={{ textAlign: "center" }}>
        {!started && (
          <button
            onClick={() => setStarted(true)}
            style={{
              padding: "10px 20px",
              background: "#E34234",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Start Face Verification
          </button>
        )}
       {started && (
          <div
            style={{
              width: "400px",
              height: "300px",
              margin: "auto",
              border: verified ? "3px solid green" : "3px solid #E34234",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              style={{ display: "none" }}
            />
            <canvas
              ref={canvasRef}
              width="400"
              height="300"
            />
          </div>
        )}

        {started && (
          <p style={{ marginTop: "10px" }}>
            {verified
              ? "✅ Liveness Verified"
              : `Please blink twice (Detected: ${blinkCount})`}
          </p>
        )}
      </div>
    );
  }


//2nd update 
//  import { useEffect, useRef, useState } from "react";
//  import { FaceMesh } from "@mediapipe/face_mesh";
//  import { Camera } from "@mediapipe/camera_utils";
//  import { useNavigate } from "react-router-dom";
//  import { useAuth } from "../context/AuthContext";

//  export default function FaceCapture({ onVerified }) {
//    const navigate = useNavigate();
//    const { setFaceVerified } = useAuth();

//    const videoRef = useRef(null);
//    const canvasRef = useRef(null);

//    const [started, setStarted] = useState(false);
//    const [verified, setVerified] = useState(false);
//    const [displayBlinkCount, setDisplayBlinkCount] = useState(0);

//    const blinkCountRef = useRef(0);
//    const eyeClosedRef = useRef(false);
//    const verifiedRef = useRef(false);
//    const lastBlinkTimeRef = useRef(0);

//    useEffect(() => {
//      if (!started) return;

//      const faceMesh = new FaceMesh({
//        locateFile: (file) =>
//          `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
//      });

//     if (blinkCount >= 2) {
//   setFaceVerified(true);
//    navigate("/otp");
//  }


//      faceMesh.setOptions({
//        maxNumFaces: 1,
//        refineLandmarks: true,
//        minDetectionConfidence: 0.6,
//        minTrackingConfidence: 0.6,
//      });

//      faceMesh.onResults(onResults);

//      const camera = new Camera(videoRef.current, {
//        onFrame: async () => {
//          await faceMesh.send({ image: videoRef.current });
//        },
//        width: 400,
//        height: 300,
//      });

//      camera.start();
//      return () => camera.stop();
//    }, [started]);

//    const onResults = (results) => {
//      if (!results.multiFaceLandmarks) return;

//      const canvas = canvasRef.current;
//      const ctx = canvas.getContext("2d");

//      ctx.clearRect(0, 0, canvas.width, canvas.height);
//      ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

//      const lm = results.multiFaceLandmarks[0];

//      const top = lm[159];
//      const bottom = lm[145];
//      const eyeDist = Math.abs(top.y - bottom.y);

//      const now = Date.now();

//      // Eye closed
//      if (eyeDist < 0.006 && !eyeClosedRef.current) {
//        eyeClosedRef.current = true;
//      }

//      // Eye opened after close → blink
//      if (eyeDist > 0.01 && eyeClosedRef.current) {
//        if (now - lastBlinkTimeRef.current > 500) {
//          blinkCountRef.current += 1;
//          setDisplayBlinkCount(blinkCountRef.current);
//          lastBlinkTimeRef.current = now;
//        }
//        eyeClosedRef.current = false;
//      }

//      // ✅ VERIFY ONCE
//      if (blinkCountRef.current >= 2 && !verifiedRef.current) {
//        verifiedRef.current = true;
//        setVerified(true);
//        onVerified(true);
//      }
//    };

//    return (
//      <div style={{ textAlign: "center" }}>
//        {!started && (
//          <button
//            onClick={() => setStarted(true)}
//            style={{
//              padding: "10px 20px",
//              background: "#E34234",
//              color: "white",
//              border: "none",
//              borderRadius: "6px",
//              cursor: "pointer",
//              marginBottom: "10px",
//            }}
//          >
//            Start Face Verification
//          </button>
//        )}

//        {started && (
//          <div
//            style={{
//              width: "400px",
//              height: "300px",
//              margin: "auto",
//              border: verified ? "3px solid green" : "3px solid #E34234",
//              borderRadius: "10px",
//              overflow: "hidden",
//            }}
//          >
//            <video ref={videoRef} autoPlay muted playsInline style={{ display: "none" }} />
//            <canvas ref={canvasRef} width="400" height="300" />
//          </div>
//        )}

//        {started && (
//          <p style={{ marginTop: "10px" }}>
//            {verified
//              ? "✅ Liveness Verified"
//              : `Please blink twice (Detected: ${displayBlinkCount})`}
//          </p>
//        )}
//      </div>
//    );
//  }


//3rd update
// import { useEffect, useRef, useState } from "react";

// const FaceCapture = ({ onVerified }) => {
//   const videoRef = useRef(null);
//   const [blinkCount, setBlinkCount] = useState(0);

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then(stream => {
//         videoRef.current.srcObject = stream;
//       });
//   }, []);

//   useEffect(() => {
//     if (blinkCount >= 2) {
//       onVerified();
//     }
//   }, [blinkCount]);

//   return (
//     <div>
//       <video ref={videoRef} autoPlay width="320" />
//       <p>Blinks detected: {blinkCount}</p>
//       <button onClick={() => setBlinkCount(b => b + 1)}>
//         Simulate Blink
//       </button>
//     </div>
//   );
// };

// export default FaceCapture;

