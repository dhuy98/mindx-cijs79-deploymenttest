// import  React,{useState} from "react";
// import ProductsData from "./App";

// const [selectedBrands, setSelectedBrands] = useState([]);
// const handleBrandChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setSelectedBrands([...selectedBrands, value]);
//     } else {
//       setSelectedBrands(selectedBrands.filter((brand) => brand !== value));
//     }
//   };
//   const filteredProducts = ProductsData.filter((product) => {
//     if (selectedBrands.length === 0) {
//       return true;
//     }
//     return selectedBrands.includes(product.brand);
//   });
//   <div className="product-container">
//   <div className="filter-container">
//     <h3>Filter by brand:</h3>
//     <label>
//       <input
//         type="checkbox"
//         value="Apple"
//         checked={selectedBrands.includes("Apple")}
//         onChange={handleBrandChange}
//       />
//       Apple
//     </label>
//     <label>
//       <input
//         type="checkbox"
//         value="Samsung"
//         checked={selectedBrands.includes("Samsung")}
//         onChange={handleBrandChange}
//       />
//       Samsung
//     </label>
//     <label>
//       <input
//         type="checkbox"
//         value="Sony"
//         checked={selectedBrands.includes("Sony")}
//         onChange={handleBrandChange}
//       />
//       Sony
//     </label>
//   </div>
//   {filteredProducts.map((product) => (
//     <div key={product.id}>
//       <h2 className="product-title">{product.name}</h2>
//       <p className="product-price">
//         Price: {product.ram_options[0].info[0].price}
//       </p>
//       <img className="product-image" src={product.image[0]} alt={product.name} />
//     </div>
//   ))}
// </div>
