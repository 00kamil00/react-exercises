import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [timesChange, setTimesChange] = useState(0)

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setTimesChange(timesChange + 1)
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h2>Times of color change: {timesChange}</h2>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
