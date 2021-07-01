import "./App.css";

/* Import useState() & useEffect() from React */
import { useState, useEffect } from "react";

/* Components - import */
import Header from "./components/Header";
import Form from "./components/Form";
import Products from "./components/Products";
import Footer from "./components/Footer";

/* Import Axios */
import axios from "axios";

/* Fontawsome - import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPlus, faSpinner, faTrash);

// const serverURL = "https://stock-bifrost.herokuapp.com/";
const serverURL = "http://localhost:3001/";

function App() {
  // STATES
  // --- General states
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // --- States for "form" part
  const [data, setData] = useState();
  const [image, setImage] = useState({});
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState("");
  const [isUpload, setIsUpload] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  // --- States for "products" part
  const [productDelete, setProductDelete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverURL}products`);
        setProducts(response.data);
        setIsLoading(false);
        setProductDelete(false);
      } catch (event) {
        console.log(event.message);
      }
    };
    fetchData();
  }, [data, productDelete]);

  return isLoading ? (
    <span className="spin">
      <FontAwesomeIcon icon="spinner" spin />
      En cours de chargement...
    </span>
  ) : (
    <>
      <Header />
      <main className="wrapper">
        <Form
          serverURL={serverURL}
          setData={setData}
          image={image}
          setImage={setImage}
          name={name}
          setName={setName}
          brand={brand}
          setBrand={setBrand}
          price={price}
          setPrice={setPrice}
          quantity={quantity}
          setQuantity={setQuantity}
          isUpload={isUpload}
          setIsUpload={setIsUpload}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
        />
        <Products
          serverURL={serverURL}
          products={products}
          quantity={quantity}
          setProductDelete={setProductDelete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
