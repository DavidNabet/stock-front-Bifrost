/* Import hooks from React */
import { useState } from "react";

/* Import Axios */
import axios from "axios";

/* Import FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = () => {
  const [data, setData] = useState();
  const [image, setImage] = useState({});
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState("");
  const [isUpload, setIsUpload] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("brand", brand);
      formData.append("price", price);
      formData.append("quantity", quantity);

      // Heroku API :
      // Local API : "http://localhost:3001/create"

      const response = await axios.post(
        "http://localhost:3001/create",
        formData
      );

      if (response.status === 201) {
        setData(response.data);
        setSuccessMessage("Produit enregistré en stock 🥳");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Ajouter un nouveau produit en stock</h2>
        <label htmlFor="file" className="file">
          <FontAwesomeIcon icon="plus" className="icon-plus" />
          Ajouter image
        </label>
        <input
          type="file"
          id="file"
          className="file"
          onChange={(event) => {
            setImage(event.target.files[0]);
            setIsUpload(true);
          }}
        />
        {isUpload ? (
          <span>🔗 Fichier sélectionné</span>
        ) : (
          <span>Aucun fichier sélectionné</span>
        )}

        <label htmlFor="name">Nom du produit</label>
        <input
          type="text"
          id="name"
          placeholder="Huile d'olive verte"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label htmlFor="brand">Marque</label>
        <input
          type="text"
          id="brand"
          placeholder="Kalios"
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />

        <label htmlFor="price">Prix</label>
        <input
          type="text"
          id="price"
          placeholder="19.90"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />

        <label htmlFor="quantity">Quantité à ajouter</label>
        <input
          type="text"
          id="quantity"
          placeholder="12"
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
        />

        <input type="submit" value="AJOUTER" className="btn-green" />
        <span>{successMessage}</span>
      </form>
    </div>
  );
};

export default Form;
