import "./App.css";
import Container from "./components/Container/Container";
import { WeatherProvider } from "./context/WeatherContext";
function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Container />
      </div>
    </WeatherProvider>
  );
}

export default App;
