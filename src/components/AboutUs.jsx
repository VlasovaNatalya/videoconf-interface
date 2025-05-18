import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>О нас</h1>
        <p>
          Мы создаем систему видеоконференц-присутствия для управления роботами, обеспечивая мониторинг в реальном времени и интуитивное управление через веб-интерфейс.
        </p>
      </section>
      <section className="about-team">
        <h2>Наша команда</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Власова Наталья</h3>
            <p>Разработка веб-интерфейса</p>
          </div>
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Санина Анастасия</h3>
            <p>Разработка компонента управления роботом</p>
          </div>
        </div>
      </section>
      <Link to="/" className="back-link">Вернуться на главную</Link>
    </div>
  );
}

export default AboutPage;