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
    <Link to={`/product/${productId}`} className="product__link">
      <div className="hvrbox">
        <img src={frontimgurl} alt={name} className="
        " />
        <div className="hvrbox-layer_top">
          <div className="hvrbox-text">{name}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
