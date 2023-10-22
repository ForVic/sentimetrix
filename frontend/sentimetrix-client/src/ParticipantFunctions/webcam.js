import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react"; 

const CaptureWebcam = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
  
    // create a capture function
    const capture = useCallback(() => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
      }
    }, [webcamRef]);

    setInterval(capture, 10000);
    console.log("setting interval")

  return (
    <div className="container">
      <Webcam height={600} width={600} />
    </div>
  );
};

export default CaptureWebcam;