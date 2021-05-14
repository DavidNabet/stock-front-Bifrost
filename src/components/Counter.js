/* Import hooks from React */
import { useState } from "react";

/* Import Axios */
import axios from "axios";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.count);
  const { id, quantity } = props;

  // Add a quantity
  // Heroku API : `https://stock-bifrost.herokuapp.com/product/add?id=${id}&quantity=${quantity}`
  // Local API : `http://localhost:3001/product/add?id=${id}&quantity=${quantity}`

  const addProduct = async (id, quantity) => {
    try {
      const response = await axios.get(
        `https://stock-bifrost.herokuapp.com/product/add?id=${id}&quantity=${quantity}`
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Remove a quantity
  // Heroku API : `https://stock-bifrost.herokuapp.com/product/remove?id=${id}&quantity=${quantity}`
  // Local API : `http://localhost:3001/product/remove?id=${id}&quantity=${quantity}`

  const removeProduct = async () => {
    try {
      const response = await axios.get(
        `https://stock-bifrost.herokuapp.com/product/remove?id=${id}&quantity=${quantity}`
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="counter">
        {counter > 0 && (
          <button
            className="btn-minus"
            onClick={() => {
              setCounter(counter - 1);
              removeProduct();
            }}
          >
            -
          </button>
        )}

        <button>{counter}</button>
        <button
          className="btn-plus"
          onClick={() => {
            setCounter(counter + 1);
            addProduct(id, quantity);
          }}
        >
          +
        </button>
      </div>
      <div>
        {counter === 0 ? (
          <span>{quantity} en stock</span>
        ) : (
          <span>{counter} en stock</span>
        )}
      </div>
    </div>
  );
};

export default Counter;
