import React, { useState } from 'react';
import robot from "./fumebatasukarunoni.png";
import './App.css';

function App() {
  const [isRainbowImage, setIsRainbowImage] = useState(false);
  const [isRainbowText, setIsRainbowText] = useState(false);
  const [message, setMessage] = useState("ドレミの歌より、死は救いであると自明である");

  const handleClick = () => {
    setIsRainbowImage((prev) => !prev); // トグルで状態を切り替え
    setIsRainbowText((prev) => !prev); // 文字の虹色状態もトグル
    setMessage((prev) => {
      if (prev === "ドレミの歌より、死は救いであると自明である") {
        return "fuck you";
      } 
      else {
        return "ドレミの歌より、死は救いであると自明である"
      }
    }); // メッセージをトグル
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={robot}
          className={`App-logo ${isRainbowImage ? 'rainbow-image' : ''}`}
          alt="logo"
        />
        <p className={isRainbowText ? 'rainbow-text' : ''}>
          {message}
        </p>
        <MyButton onClick={handleClick} />
        <a
          className={isRainbowText ? "rainbow-text" : "link"}
          href="https://www.sokagakkai.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          踏めば助かるのに
        </a>
      </header>
    </div>
  );
}

function MyButton({ onClick }) {
  return (
    <button onClick={onClick}>
      表現の自由
    </button>
  );
}

export default App;
