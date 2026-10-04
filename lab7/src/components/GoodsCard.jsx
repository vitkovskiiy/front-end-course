
function GoodsCard({ image, name, price }) {
  return (
    <article className="goods-card">
      <img src={image} alt={name} loading="lazy" />
      <div className="goods-card-body">
        <h3>{name}</h3>
        <p>{price} грн / кг</p>
      </div>
    </article>
  );
}

export default GoodsCard;
