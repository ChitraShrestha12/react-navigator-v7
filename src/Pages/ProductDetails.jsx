import { useParams } from "react-router";
import useFetch from "../Hooks/useFetch";

const ProductDetails = () => {
  const {id}=useParams()
  const [data,loading,error]=useFetch(`https://fakestoreapi.com/products/${id}`)
  if(loading){
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }
  if (!data) {
    return <p>Product not found!</p>
  }
  return (
    <div className="product-details">
      <h1 className="product-title">{data.title}</h1>
      <p className="product-brand">
        <strong>Brand:</strong> {data.brand}
      </p>
      <p className="product-category">
        <strong>Category:</strong> {data.category}
      </p>
      <p className="product-availability">
        <strong>Availability:</strong> {data.availabilityStatus}
      </p>
      <p className="product-price">
        <strong>Price:</strong> ${data.price}
      </p>
      <p className="product-description">{data.description}</p>

      <div className="product-images">
        <img src={data.image} alt="" />
      </div>
    </div>
  );
};

export default ProductDetails;
