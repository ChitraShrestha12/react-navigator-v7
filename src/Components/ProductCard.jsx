import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <Link to={`./${product.id}`} className="product-card">
      <img src={product.images} alt={product.title} className="product-image" />
      <h3 className="product-name">{product.title}</h3>
      <p className="product-price">{product.price}</p>
      <p className={`product-stock ${product.availabilityStatus === "In Stock" ? "in-stock" : "out-of-stock"}`}>
        {product.availabilityStatus}
      </p>
    </Link>
  );
};

export default ProductCard;
