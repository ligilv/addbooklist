import "./App.css";
import Bookinput from "./components/Bookinput";
import BookHeader from "./components/Header";
function App() {
  return (
    <div
      style={{
        flexDirection: "column",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBD6D2",
      }}
    >
      <BookHeader />
      <Bookinput />
    </div>
  );
}

export default App;
