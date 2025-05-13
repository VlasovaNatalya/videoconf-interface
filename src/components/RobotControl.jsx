import { useState } from "react";

function RobotControl() {
  const [command, setCommand] = useState("");

  return (
    <div className="control-box">
      <p>Панель управления</p>
      <div className="control-buttons">
        <button onClick={() => setCommand("Вперед")}>Вперед</button>
        <button onClick={() => setCommand("Назад")}>Назад</button>
        <button onClick={() => setCommand("Влево")}>Влево</button>
        <button onClick={() => setCommand("Вправо")}>Вправо</button>
        <button onClick={() => setCommand("Стоп")}>Стоп</button>
      </div>
      {command && <p>Текущая команда: {command}</p>}
    </div>
  );
}

export default RobotControl;