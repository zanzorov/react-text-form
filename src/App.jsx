import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [textDirty, setTextDirty] = useState(false);
  const [textError, setTextError] = useState(
    "Поле ввода не должно быть пустым"
  );
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleBlur = () => {
    setTextDirty(true);
  };

  const handleText = (e) => {
    setText(e.target.value);
    if (!e.target.value) {
      setTextError("Поле ввода не должно быть пустым!");
    } else {
      setTextError("");
      setMessage("");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(text);
    setSent(true);
    setMessage("Сообщение успешно отправлено");
    setText("");
  };

  return (
    <div className="app">
      <h2>Форма подписки</h2>
      <form>
        <input
          onChange={handleText}
          value={text}
          onBlur={handleBlur}
          type="text"
          className={`${textDirty && textError ? "is-error" : ""}`}
        />
        <button disabled={text ? false : true} onClick={handleClick}>
          Отправить
        </button>
      </form>
      {textDirty && textError && (
        <div style={{ color: "red" }}>{textError}</div>
      )}
      {sent && !textError && <div style={{ color: "green" }}>{message}</div>}
    </div>
  );
}

export default App;
