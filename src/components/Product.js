import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({
  productId,
  name,
  description,
  price,
  frontimgurl,
  backimgurl,
}) => {
  return (
    <div className="product">
      <Link to={`/product/${productId}`} className="product__link">
        <img src={frontimgurl} alt={name} />

        <div className="product__info">
          <p className="info__name">{name}</p>

          <p className="info__name">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
