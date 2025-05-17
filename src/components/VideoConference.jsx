import { useState } from "react";
import { Link } from "react-router-dom";

function VideoConference() {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  return (
    <div className="video-box">
      <div className="video-grid">
        <Link to="/robot/robot1" className="participant">
          <div className="participant-label">Робот 1</div>
        </Link>
        <Link to="/robot/robot2" className="participant">
          <div className="participant-label">Робот 2</div>
        </Link>
        <Link to="/robot/robot3" className="participant">
          <div className="participant-label">Робот 3</div>
        </Link>
        <Link to="/robot/robot4" className="participant">
          <div className="participant-label">Робот 4</div>
        </Link>
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