import './App.css';
import { useState } from 'react';

function App() {

  var emojiDictionary = {
    "😊": "smiling",
    "😉": "winking",
    "😘": "kiss",
    "😳": "disbelief",
    "😔": "sad",
    "🤔": "thinking",
    "❤️": "love",
    "😴": "sleeping",
    "😑": "annoyance",
    "😕": "confused",
    "😠": "angry",
    "🤓": "nerd"
  };

  var emojiList = Object.keys(emojiDictionary)
  const [meaning,setMeaning]=useState("")

  function inputChangeHandler(event){
    var emoji = event.target.value
    var meaning = emojiDictionary[emoji];

    if (meaning === undefined) {
      meaning = "Sorry, We don't have this in our database";
    }
    // ,output
    setMeaning(meaning);
  }

  function knowEmoji(emoji){
    setMeaning(emojiDictionary[emoji])
  }

  return(
    <div className="App">
      <h1>Know Your Emojis</h1>
      <input  placeholder="Enter the emoji to know it's emotions" onChange={inputChangeHandler}/>
      <h2 style={{ color: "grey" }}> {meaning} </h2>
      <h1>List Of Emojis</h1>
      {emojiList.map(function (emoji) {
        return (
          <span
            onClick={() => knowEmoji(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

    </div>
  )
}


export default App;
