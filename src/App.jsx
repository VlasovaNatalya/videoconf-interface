import VideoConference from "./components/VideoConference";
import RobotControl from "./components/RobotControl";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Система видеоконференций и управления роботом</h1>
      </header>
      <div className="main-content">
        <div className="video-section">
          <h2>Видеоконференция</h2>
          <VideoConference />
        </div>
        <div className="side-panel">
          <h2>Управление роботом</h2>
          <RobotControl />
        </div>
      </div>
      <footer>
        <p>© 2025 Мой проект</p>
      </footer>
    </div>
  );
}

export default App;