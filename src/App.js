import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😋": "Face Savoring Food",
  "🤗": " Hugging Face",
  "😐": "Neutral Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😪": "Sleepy Face",
  "🥵": "Hot Face",
  "😉": "Winking Face",
  "🤩": "Star-Struck",
  "🤪": "Zany Face",
  "🤔": "Thinking Face",
  "✌️": "Victory Hand",
  "🏧": "ATM Sign",
  "🚸": "Children Crossing",
  "⛔": "No Entry",
  "🚫": "Prohibited",
  "🚳": "No Bicycles",
  "🚭": "No Smoking",
  "🚯": "No Littering",
  "📵": " No Mobile Phones",
  "🚮": "Litter in Bin Sign",
  "🚰": "Potable Water",
  "♿": "Wheelchair",
  "🚹": "Men’s Room",
  "🚺": "Women’s Room",
  "🚻": "Restroom"
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
