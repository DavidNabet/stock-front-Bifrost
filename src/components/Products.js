/* Import FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Import Axios */
import axios from "axios";

/* Components - import */
import Counter from "./Counter";

const Products = ({ products, serverURL, setProductDelete, quantity }) => {
  // Delete products from BDD
  const deleteProduct = async (id) => {
    try {
      const response = await axios.post(`${serverURL}delete/${id}`);
      setProductDelete(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="products">
      {products.map((item) => {
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

            <div className="product-card-counter">
              <Counter
                serverURL={serverURL}
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
