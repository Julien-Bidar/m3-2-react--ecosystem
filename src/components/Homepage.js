import React from "react";
import { items } from "../data";
import ListingGrid from "./ListingGrid";
import styled from "styled-components";

const Home = styled.div`
  background-color: #e9ecef;
`;
const Text = styled.p`
  font-family: sans-serif;
  margin: 15px;
  padding: 15px;
`;

const Homepage = () => {
  let itemList = Object.values(items);
  return (
    <Home>
      <Text>
        Fruit emporium sells the finest fruits from this world and beyond.
        <h3>Browse items:</h3>
      </Text>
      <ListingGrid itemList={itemList} />
    </Home>
  );
};

export default Homepage;
