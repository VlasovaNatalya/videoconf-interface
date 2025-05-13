import VideoConference from "./components/VideoConference";
import RobotControl from "./components/RobotControl";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="video-section">
        <h1>Видеоконференция</h1>
        <VideoConference />
      </div>
      <div className="side-panel">
        <h2>Управление роботом</h2>
        <RobotControl />
      </div>
    </div>
  );
}

export default App;
