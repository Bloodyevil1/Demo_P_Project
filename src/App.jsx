import { useState } from "react";
import "./App.css";

function App() {
  const contents = [
    "This is the first card",
    "Here is the second card",
    "And this is the third card",
    "Last card content"
  ];

  const backgrounds = [
    "url('https://picsum.photos/id/1015/800/600')",
    "url('https://picsum.photos/id/1025/800/600')",
    "url('https://picsum.photos/id/1035/800/600')",
    "url('https://picsum.photos/id/1045/800/600')"
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  function changeCard(newIndex) {
    setFade(true); // start fade-out
    setTimeout(() => {
      setIndex(newIndex);
      setFade(false); // fade-in
    }, 300);
  }

  function handleNext() {
    if (index < contents.length - 1) {
      changeCard(index + 1);
    }
  }

  function handlePrevious() {
    if (index > 0) {
      changeCard(index - 1);
    }
  }

  return (
    <div
      className={`card ${fade ? "fade-out" : "fade-in"}`}
      style={{
        backgroundImage: backgrounds[index],
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h1>{contents[index]}</h1>

      <div className="buttons">
        <button onClick={handlePrevious} disabled={index === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={index === contents.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
