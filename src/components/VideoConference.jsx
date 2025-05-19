import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function VideoConference() {
  const robots = {
    robot1: {
      name: "Робот 1",
      status: "Онлайн",
      battery: "85%",
      task: "Патрулирование",
    },
    robot2: {
      name: "Робот 2",
      status: "Оффлайн",
      battery: "20%",
      task: "Ожидание",
    },
    robot3: {
      name: "Робот 3",
      status: "Онлайн",
      battery: "95%",
      task: "Диагностика",
    },
    robot4: {
      name: "Робот 4",
      status: "Оффлайн",
      battery: "50%",
      task: "Зарядка",
    },
  };

  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const videoRefs = {
    robot1: useRef(null),
    robot2: useRef(null),
    robot3: useRef(null),
    robot4: useRef(null),
  };

  useEffect(() => {
    const getMediaStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: isCameraOn,
          audio: isMicOn,
        });

        Object.values(videoRefs).forEach((ref) => {
          if (ref.current) {
            ref.current.srcObject = stream;
          }
        });
      } catch (error) {
        console.error("Ошибка доступа к камере/микрофону:", error);
      }
    };

    if (isCameraOn || isMicOn) {
      getMediaStream();
    } else {
      Object.values(videoRefs).forEach((ref) => {
        if (ref.current && ref.current.srcObject) {
          const tracks = ref.current.srcObject.getTracks();
          tracks.forEach((track) => track.stop());
          ref.current.srcObject = null;
        }
      });
    }

    return () => {
      Object.values(videoRefs).forEach((ref) => {
        if (ref.current && ref.current.srcObject) {
          const tracks = ref.current.srcObject.getTracks();
          tracks.forEach((track) => track.stop());
        }
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCameraOn, isMicOn]);

  return (
    <div className="video-box">
      <div className="video-grid">
        <Link to="/robot/robot1" className="participant">
          <div className="participant-label">
            <span className="label-name">Робот 1</span>
            <div className="status-indicators">
              <span>Статус: {robots.robot1.status}</span>
              <span>Батарея: {robots.robot1.battery}</span>
              <span>Задача: {robots.robot1.task}</span>
            </div>
          </div>
          <video
            ref={videoRefs.robot1}
            autoPlay
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Link>
        <Link to="/robot/robot2" className="participant">
          <div className="participant-label">
          <span className="label-name">Робот 2</span>
            <div className="status-indicators">
              <span>Статус: {robots.robot2.status}</span>
              <span>Батарея: {robots.robot2.battery}</span>
              <span>Задача: {robots.robot2.task}</span>
            </div>
          </div>
          <video
            ref={videoRefs.robot2}
            autoPlay
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Link>
        <Link to="/robot/robot3" className="participant">
          <div className="participant-label">
          <span className="label-name">Робот 3</span>
            <div className="status-indicators">
              <span>Статус: {robots.robot3.status}</span>
              <span>Батарея: {robots.robot3.battery}</span>
              <span>Задача: {robots.robot3.task}</span>
            </div>
          </div>
          <video
            ref={videoRefs.robot3}
            autoPlay
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Link>
        <Link to="/robot/robot4" className="participant">
          <div className="participant-label">
          <span className="label-name">Робот 4</span>
            <div className="status-indicators">
              <span>Статус: {robots.robot4.status}</span>
              <span>Батарея: {robots.robot4.battery}</span>
              <span>Задача: {robots.robot4.task}</span>
            </div>
          </div>
          <video
            ref={videoRefs.robot4}
            autoPlay
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
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