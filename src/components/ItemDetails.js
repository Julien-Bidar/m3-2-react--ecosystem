import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";

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
        <Grid>
          <InfoSection>
            <Img src={el.imageSrc} alt="" />
            <Name>{el.name}</Name>
            <LatinName>{el.latinName}</LatinName>
            <Description>{el.description}</Description>
            <Country>product of {el.countryOfOrigin}</Country>
            {el.quantity > 0 && <Button>{el.price}$ - Buy now</Button>}
            {el.quantity === 0 && <p>out of stock</p>}
            {sellerArray
              .filter((seller) => {
                if (seller.id === el.sellerId) {
                  return true;
                }
              })
              .map((person) => {
                return (
                  <SellerSection>
                    <Avatar src={person.avatarSrc} alt="" />
                    <SoldBy>
                      Sold by: {person.storeName}, by {person.id}
                    </SoldBy>
                  </SellerSection>
                );
              })}
          </InfoSection>
        </Grid>
      );
    });
};

const Grid = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px;
`;

const Img = styled.img`
  width: 400px;
  border-radius: 30px;
`;

const InfoSection = styled.div`
  width: 600px;
  margin: 0 0 0 40px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Name = styled.h1`
  font-family: sans-serif;
  margin: 0;
  opacity: 0.8;
`;

const LatinName = styled.h2`
  font-family: sans-serif;
  font-style: italic;
  font-weight: 400;
  color: grey;
  opacity: 0.7;
  margin: 0 0 40px 0;
`;

const Description = styled.p`
  font-family: sans-serif;
  line-height: 1.4em;
  font-size: 110%;
  margin: 0;
`;

const Country = styled.h3`
  font-family: sans-serif;
  font-style: italic;
  font-weight: bold;
  color: black;
  opacity: 0.8;
  margin-bottom: 40px;
`;

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  background-color: #4700e0;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin-bottom: 15px;
`;

const SellerSection = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const SoldBy = styled.p`
  font-family: sans-serif;
`;

export default ItemDetails;
