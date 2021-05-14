/* Import FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Import Axios */
import axios from "axios";

/* Components - import */
import Counter from "./Counter";

const Products = ({ data }) => {
  // Heroku API : `https://stock-bifrost.herokuapp.com/delete/${id}`
  // Local API : `http://localhost:3001/delete/${id}`

  // Delete products from BDD
  const deleteProduct = async (id) => {
    try {
      const response = await axios.post(
        `https://stock-bifrost.herokuapp.com/delete/${id}`
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="products">
      {data.map((item, index) => {
        return (
          <div key={item._id} className="product-card">
            <img src={item.product_image.secure_url} alt={item.product_name} />
            <div className="trash-circle">
              <FontAwesomeIcon
                icon="trash"
                className="icon-trash"
                onClick={() => {
                  deleteProduct(item._id);
                }}
              />
            </div>

            {/* <span>{item.product_quantity} en stock</span> */}
            <div className="product-card-counter">
              <Counter
                count={item.product_quantity}
                id={item._id}
                quantity={item.product_quantity}
              />
            </div>
            <div className="product-card-details">
              <p>{item.product_name}</p>
              <p>{item.product_brand}</p>
              <p>{item.product_price} €</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
