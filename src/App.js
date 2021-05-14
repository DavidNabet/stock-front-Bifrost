import "./App.css";

/* Components - import */
import Header from "./components/Header";
import Form from "./components/Form";
import Products from "./components/Products";
import Footer from "./components/Footer";

/* Import Axios */
import axios from "axios";

/* Import useState() & useEffect() from React */
import { useState, useEffect } from "react";

/* Fontawsome - import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPlus, faSpinner, faTrash);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Heroku API :
  // Local API : http://localhost:3001/products

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setData(response.data);
        setIsLoading(false);
      } catch (event) {
        console.log(event.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span className="spin">
      <FontAwesomeIcon icon="spinner" spin />
      En cours de chargement...
    </span>
  ) : (
    <>
      <Header />
      <main className="wrapper">
        <Form />
        <Products data={data} />
      </main>
      <Footer />
    </>
  );
}

export default App;
