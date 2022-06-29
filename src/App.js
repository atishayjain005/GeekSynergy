import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUpPage />
    </div>
  );
}

export default App;
