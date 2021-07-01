/* Import hooks from React */
import { useState } from "react";

/* Import Axios */
import axios from "axios";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.count);
  const { id, quantity, serverURL } = props;

  // Add a quantity
  const addProduct = async (id, quantity) => {
    try {
      const response = await axios.get(
        `${serverURL}product/add?id=${id}&quantity=${quantity}`
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Remove a quantity
  const removeProduct = async () => {
    try {
      const response = await axios.get(
        `${serverURL}product/remove?id=${id}&quantity=${quantity}`
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
          <span className="null">{counter} en stock</span>
        ) : (
          <span>{counter} en stock</span>
        )}
      </div>
    </div>
  );
};

export default Counter;
