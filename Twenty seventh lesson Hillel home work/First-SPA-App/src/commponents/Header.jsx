import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{ padding: "10px", borderBottom: "1px solid gray" }}>
      <nav>
        <Link to="/">Головна</Link> |{" "}
        <Link to="/about">Про мене</Link> |{" "}
        <Link to="/contacts">Контакти</Link> |{" "}
        <button onClick={toggleTheme}>
          Змінити на {theme === "light" ? "темну" : "світлу"} тему
        </button>
      </nav>
    </header>
  );
}

export default Header;
