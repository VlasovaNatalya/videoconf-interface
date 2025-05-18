import { useState } from "react";
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