// /* Import hooks from React */
// import { useState } from "react";

// /* Import Axios */
// import axios from "axios";

// /* Import FontAwesome */
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Modal = (props) => {
//   const [data, setData] = useState();
//   const [image, setImage] = useState({});
//   const [name, setName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState();
//   const [quantity, setQuantity] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isUpload, setIsUpload] = useState(false);

//   if (!props.show) {
//     return null;
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const fetchData = async () => {
//       try {
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("brand", brand);
//         formData.append("description", description);
//         formData.append("price", price);
//         formData.append("quantity", quantity);
//         formData.append("image", image);

//         const response = await axios.post(
//           "http://localhost:3001/create",
//           formData
//         );

//         console.log(response.data);

//         setData(response.data);
//         props.setShow(false);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchData();
//   };

//   return isLoading ? (
//     <div className="loading">
//       <span className="spin">
//         <FontAwesomeIcon icon="spinner" spin />
//       </span>

//       <span>En cours de chargement...</span>
//     </div>
//   ) : (
//     <>
//       <div className="modal" onClick={props.onClose}>
//         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//           <div className="modal-header">
//             <h2>Ajouter un nouveau produit en stock</h2>
//           </div>

//           <div className="modal-body">
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="file" className="file">
//                 <FontAwesomeIcon icon="plus" className="icon-plus" />
//                 Ajouter image
//               </label>
//               <input
//                 type="file"
//                 id="file"
//                 className="file"
//                 onChange={(event) => {
//                   setImage(event.target.files[0]);
//                   setIsUpload(true);
//                 }}
//               />
//               {isUpload ? (
//                 <span>🔗 Fichier sélectionné</span>
//               ) : (
//                 <span>Aucun fichier sélectionné</span>
//               )}

//               <label htmlFor="name">Nom du produit</label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Huile d'olive verte"
//                 onChange={(event) => {
//                   setName(event.target.value);
//                 }}
//               />

//               <label htmlFor="brand">Marque</label>
//               <input
//                 type="text"
//                 id="brand"
//                 placeholder="Kalios"
//                 onChange={(event) => {
//                   setBrand(event.target.value);
//                 }}
//               />

//               <label htmlFor="description">Courte description</label>
//               <textarea
//                 id="description"
//                 placeholder="Juan Arbelaez, chef de nos restaurants Yaya, a sélectionné pour vous l'huile..."
//                 onChange={(event) => {
//                   setDescription(event.target.value);
//                 }}
//               ></textarea>

//               <label htmlFor="price">Prix</label>
//               <input
//                 type="text"
//                 id="price"
//                 placeholder="19.90"
//                 onChange={(event) => {
//                   setPrice(event.target.value);
//                 }}
//               />

//               <label htmlFor="quantity">Quantité à ajouter</label>
//               <input
//                 type="text"
//                 id="quantity"
//                 placeholder="12"
//                 onChange={(event) => {
//                   setQuantity(event.target.value);
//                 }}
//               />

//               <input
//                 type="submit"
//                 value="AJOUTER"
//                 className="btn-green"
//                 onClick={props.onSubmit}
//               />
//             </form>
//           </div>
//           <div className="modal-footer">
//             <button onClick={props.onClose} className="modal-bouton">
//               Fermer
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;
