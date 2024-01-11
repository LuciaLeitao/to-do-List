import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";
function Item(props) {
  return (
    <div
      className="
    flex-between"
    >
      <li>{props.text}</li>
      <span style={{ color: "gray" }}>
        <FaRegTrashAlt onClick={() => props.onChecked(props.id)} />
      </span>
    </div>
  );
}

export default Item;
