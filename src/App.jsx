import VideoConference from "./components/VideoConference";
import RobotControl from "./components/RobotControl";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="video-section">
          <h2>Видеоконференция</h2>
          <VideoConference />
        </div>
        {/* <div className="side-panel">
          <h2>Управление роботом</h2>
          <RobotControl />
        </div> */}
      </div>
      <footer>
        <p>© 2025 Мой проект</p>
      </footer>
    </div>
  );
}

export default App;