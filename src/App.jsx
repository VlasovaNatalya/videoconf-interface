import VideoConference from "./components/VideoConference";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import RobotControl from "./components/RobotControl";
import "./App.css";
import Header from "./components/Header";
import RobotPage from "./components/RobotPage"; // компонент для страницы робота(от Насти)

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="video-section">
                <span className="app-description">
                  Система видеоконференц-присутствия для управления роботами: мониторинг в реальном времени, видеопотоки с роботов, интуитивное управление задачами и настройками через веб-интерфейс.
                </span>
                <h2>Видеоконференция</h2>
                <VideoConference />
              </div> }/>
            <Route path="/robot/:robotId" element={<RobotPage />} />
          </Routes>
        </div>
        <footer>
          <p>© 2025 Мой проект</p>
        </footer>
      </div>
          
    </Router>
  );
}

export default App;