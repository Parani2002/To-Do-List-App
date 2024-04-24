import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label>{item.item}</label> 
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tableIndex="0"
      />
    </li>
  );
}

export default LineItem