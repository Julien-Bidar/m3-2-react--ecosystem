import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const ItemDetails = () => {
  const { itemId } = useParams();
  let itemArray = Object.values(items);
  let sellerArray = Object.values(sellers);
  return itemArray
    .filter((item) => {
      if (item.id === itemId) {
        return true;
      }
    })
    .map((el) => {
      return (
        <div>
          <img src={el.imageSrc} alt="" />
          <h1>{el.name}</h1>
          <p>{el.latinName}</p>
          <p>{el.description}</p>
          <p>product of {el.countryOfOrigin}</p>
          {el.quantity > 0 && <button>{el.price}$ - Buy now</button>}
          {el.quantity === 0 && <p>out of stock</p>}
          {sellerArray
            .filter((seller) => {
              if (seller.id === el.sellerId) {
                return true;
              }
            })
            .map((person) => {
              return (
                <div>
                  <img src={person.avatarSrc} alt="" />
                  <span>
                    Sold by: {person.storeName}, by {person.id}
                  </span>
                </div>
              );
            })}
        </div>
      );
    });
};

export default ItemDetails;
