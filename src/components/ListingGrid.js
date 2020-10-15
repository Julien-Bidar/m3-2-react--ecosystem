import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-space-around;
`;

const ItemDiv = styled.div`
  border-radius: 12px;
  position: relative;
  margin: 25px;
  width: 300px;
  height: 350px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  max-width: 200px;
  max-height: auto;
  border-radius: 8px;
  /* position: absolute; */
`;

const Fruit = styled.h3`
  text-align: center;
  text-decoration: none;
  color: black;
  font-family: sans-serif;
`;

const LatinName = styled.p`
  text-align: center;
  text-decoration: none;
  color: black;
  font-family: sans-serif;
`;

const ListingGrid = ({ itemList }) => {
  //console.log(itemList);
  return (
    <Grid>
      {itemList.map((item) => {
        console.log(item.id);
        return (
          <ItemDiv itemId={item.id}>
            <Link to={`/items/${item.id}`}>
              <Img itemId={item.id} src={item.imageSrc} alt="" />
              <Fruit>{item.name}</Fruit>
              <LatinName> {item.latinName} </LatinName>
            </Link>
          </ItemDiv>
        );
      })}
    </Grid>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListingGrid;
