import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState(
    [
    {
        id:1,
        checked:true,
        item:"Practice coding"
    }
    ,{
        id:2,
        checked:true,
        item: "Play Cricket"
    }
    ,{
        id:3,
        checked:false,
        item:"Read about AI"
    }
]);

const [newItem, setNewItem] = useState("");


const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const addNewItem = {id, checked:false,item}
  const listItems = [...items, addNewItem]
  setItems(listItems)
  localStorage.setItem("to-do-list", JSON.stringify(listItems));
}

const handleCheck = (id) => {
    const listItems = items.map((item) =>
    item.id === id ? {...item, checked:!item.checked} : item)
    setItems(listItems)
}
const handleDelete = (id) => {
    setItems(items.filter((item => item.id !== id)))

}
const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) return;
  console.log(newItem);
  addItem(newItem)
  
  setNewItem('');
}




  return (
    <div className="App">
      <Header title = "To Do List" />
      <AddItem 
        newItem ={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}

      />
      <Footer 
        length = {items.length}
      
      />

    </div>
  );
}

export default App;
