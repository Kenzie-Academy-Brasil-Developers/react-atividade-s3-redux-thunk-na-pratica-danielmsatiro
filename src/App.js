import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [input, setInput] = useState("");

  const { name, comments } = useSelector((store) => store.user);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <ul>
          {comments.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <Button input={input}>new comment</Button>
      </header>
    </div>
  );
}

export default App;
