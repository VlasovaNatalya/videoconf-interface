import { useState } from "react";

function VideoConference() {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  return (
    <div className="video-box">
      <div className="video-grid">
        <div className="participant">Робот 1</div>
        <div className="participant">Робот 2</div>
        <div className="participant">Робот 3</div>
        <div className="participant">Робот 4</div>
      </div>
      <div className="controls">
        <button onClick={() => setIsCameraOn(!isCameraOn)}>
          {isCameraOn ? "Выкл камеру" : "Вкл камеру"}
        </button>
        <button onClick={() => setIsMicOn(!isMicOn)}>
          {isMicOn ? "Выкл микрофон" : "Вкл микрофон"}
        </button>
      </div>
    </div>
  );
}

export default VideoConference;