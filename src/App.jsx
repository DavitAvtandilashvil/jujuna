import { useWine } from "./context/useWine";
import Home from "./pages/Home";

function App() {
  const { isDarkMode } = useWine();
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Home />
    </div>
  );
}

export default App;
