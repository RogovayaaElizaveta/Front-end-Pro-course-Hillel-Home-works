import { useTheme } from "../context/ThemeContext";

function MainContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Головна частина контенту</h1>
      <p>Зараз активна тема: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Змінити тему
      </button>
    </div>
  );
}

export default MainContent;
