import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import Input from "./components/Input";

function App() {
  const [toDo, setToDo] = useState("");
  const [listItem, setListItem] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setToDo(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    if (toDo !== "") {
      setListItem([...listItem, toDo]);
      setToDo("");
    } else {
      alert("insert an item");
    }
  }

  function deleteItem(id) {
    setListItem((prevItems) => prevItems.filter((prevItem, i) => i !== id));
  }

  return (
    <>
      <div className="container">
        <Header />

        <Input
          onChange={handleChange}
          type="text"
          placeholder="shopping..."
          value={toDo}
          clicked={handleClick}
        />

        <div>
          <ul>
            {listItem.map((todoItem, key) => (
              <Item key={key} id={key} text={todoItem} onChecked={deleteItem} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
