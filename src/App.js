import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐": "Grinning Face",
  "๐": "Face Savoring Food",
  "๐ค": " Hugging Face",
  "๐": "Neutral Face",
  "๐คฅ": "Lying Face",
  "๐": "Relieved Face",
  "๐ช": "Sleepy Face",
  "๐ฅต": "Hot Face",
  "๐": "Winking Face",
  "๐คฉ": "Star-Struck",
  "๐คช": "Zany Face",
  "๐ค": "Thinking Face",
  "โ๏ธ": "Victory Hand",
  "๐ง": "ATM Sign",
  "๐ธ": "Children Crossing",
  "โ": "No Entry",
  "๐ซ": "Prohibited",
  "๐ณ": "No Bicycles",
  "๐ญ": "No Smoking",
  "๐ฏ": "No Littering",
  "๐ต": " No Mobile Phones",
  "๐ฎ": "Litter in Bin Sign",
  "๐ฐ": "Potable Water",
  "โฟ": "Wheelchair",
  "๐น": "Menโs Room",
  "๐บ": "Womenโs Room",
  "๐ป": "Restroom"
};

var listOfEmoji = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" Signs and emojis ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Emoji is not in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji and Sign Interpreter</h1>
      <div>
        <input
          className="input"
          onChange={emojiInputHandler}
          placeholder="put emoji here"
        />
      </div>
      <div className="output"> {meaning} </div>

      <div className="list">
        {listOfEmoji.map(function (emoji) {
          return (
            <span
              className="emoji"
              onClick={() => emojiClickHandler(emoji)}
              keys={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
