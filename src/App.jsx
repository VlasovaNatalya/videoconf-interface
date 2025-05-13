import VideoConference from "./components/VideoConference";
import RobotControl from "./components/RobotControl";
import Chat from "./components/Chat";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Левая часть — видеоконференция */}
      <div className="flex-1 flex flex-col p-4">
        <h1 className="text-xl font-bold mb-2">Видеоконференция</h1>
        <VideoConference />
      </div>

      {/* Правая панель — управление и чат */}
      <div className="w-1/3 bg-gray-800 p-4 flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-1">Управление роботом</h2>
          <RobotControl />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">Чат</h2>
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
