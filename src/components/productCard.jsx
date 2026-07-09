import './productCard.css'

export default function ProductCard() {
  return (
    <div className="productCard">
      <img src="" alt="product name" />
      <div className="priceSection">
        <p className="price">$100</p>
        <p className="discount">20% OFF</p>
      </div>
      <p>ratings</p>
    </div>
  );
}
