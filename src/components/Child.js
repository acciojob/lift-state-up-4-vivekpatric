const Child = ({ items, changeState }) => {

    return (
      <div className="child">
        <h2>Child Component</h2>
        <ul>
          {items.length > 0 &&
            items.map((ele) => (
              <li>
                {ele.itemName} - ${ele.itemPrice}{" "}
                <button onClick={() => {
                  changeState(items.filter((i) => {
                      return i.itemName !== ele.itemName
                  }))
                }}>Remove</button>
              </li>
            ))}
        </ul>
      </div>
    );
  };
  
  export default Child;