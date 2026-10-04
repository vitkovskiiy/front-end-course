import GoodsCard from "./GoodsCard";
import apple from "../assets/products/apple.svg";
import banana from "../assets/products/banana.svg";
import orange from "../assets/products/orange.svg";
import pear from "../assets/products/pear.svg";
import strawberry from "../assets/products/strawberry.svg";
import grapes from "../assets/products/grapes.svg";

const goods = [
  { id: 1, image: apple, name: "Яблука", price: 48 },
  { id: 2, image: banana, name: "Банани", price: 62 },
  { id: 3, image: orange, name: "Апельсини", price: 55 },
  { id: 4, image: pear, name: "Груші", price: 72 },
  { id: 5, image: strawberry, name: "Полуниця", price: 135 },
  { id: 6, image: grapes, name: "Виноград", price: 89 }
];

function GoodsGallery() {
  return (
    <div className="goods-grid">
      {}
      {goods.map((good) => (
        <GoodsCard
          key={good.id}
          image={good.image}
          name={good.name}
          price={good.price}
        />
      ))}
    </div>
  );
}

export default GoodsGallery;
