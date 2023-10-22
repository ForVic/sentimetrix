import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

function captureScreenshotFunction() {
  const capturing = false; // Initialize the capturing state

  const captureScreenshot = () => {
    html2canvas(document.documentElement).then(canvas => {
      const screenshot = canvas.toDataURL('image/png');
      const blob = canvas.toBlob(blob => {
        let file_name = `screenshot_${new Date().getTime()}.png`;
        saveAs(blob, file_name);
        console.log("capturing rn");

        // fetch("/v1/interview/screenshot")
      });
    });
  };

  const startCapturing = () => {
    let intervalId = setInterval(captureScreenshot, 10000); // Capture a screenshot every 10 seconds
    console.log("start id", intervalId)
    return intervalId;
};

  const stopCapturing = (intervalId) => {
    clearInterval(intervalId);
    console.log(intervalId)
  };
//   return {startCapturing, stopCapturing};
return {startCapturing, stopCapturing};
}

export default captureScreenshotFunction;
