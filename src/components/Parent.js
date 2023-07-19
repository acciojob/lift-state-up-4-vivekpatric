import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [cartItems, setCartItems] = useState([]);
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");

  function handleChange(event) {
    event.preventDefault();
    if(name && price)
        setCartItems([...cartItems, { itemName: name, itemPrice: price }]);
    setName("")
    setPrice("")
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <form onSubmit={handleChange}>
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          onChange={(event) => setName(event.target.value)}
          value={name}
        ></input>
        <label htmlFor="itemPrice">Item Price:</label>
        <input
          type="text"
          id="itemPrice"
          onChange={(event) => setPrice(event.target.value)}
          value={price}
        ></input>
        <input type="submit" value={"Add Item"}></input>
      </form>
      <Child changeState={setCartItems} items={cartItems} />
    </div>
  );
};

export default Parent;