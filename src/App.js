import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
function App() {
  return (
    <div className="App">
      <div className="header">
        <Profile />
        <Login />
        <ChangeColor />
      </div>
    </div>
  );
}

export default App;
