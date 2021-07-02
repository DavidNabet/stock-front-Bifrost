/* Components - import */
import Counter from "./Counter";

/* Other - import */
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = ({
  products,
  serverURL,
  setProductDelete,
  show,
  setShow,
  idProductActif,
  setIdProductActif,
}) => {
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
                  setShow(true);
                  setIdProductActif(item._id);
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
      {/* Modal to confirm delete or not */}
      {show && (
        <div
          className="modalDelete"
          onClick={() => {
            setShow(false);
          }}
        >
          <div className="confirmDelete" onClick={(e) => e.stopPropagation()}>
            <div>
              <div
                onClick={() => {
                  setShow(false);
                }}
              >
                X
              </div>
              <p>Voulez-vous vraiment supprimer ce produit ?</p>
              <div>
                <button
                  className="btn-green"
                  onClick={() => {
                    deleteProduct(idProductActif);
                    setShow(false);
                  }}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
