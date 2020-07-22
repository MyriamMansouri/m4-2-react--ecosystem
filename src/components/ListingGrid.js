import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
`;

const Tile = styled.div`
  width: 250px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  box-shadow: 0px 0px 31px 14px rgba(232, 232, 232, 0.48);
  border-radius: 10px;
  margin: 30px 0;
  padding: 10px 10px 25px;

  img {
    width: 150px;
    border-radius: 10px;
    margin-top: -25px;
  }
  .latin-name {
    font-style: italic;
  }
  .name {
    position: relative;
    width: 100%;
    text-align: center;
  }
  .name:before {
    content: "";
    position: absolute;
    left: 40%;
    bottom: -20px;
    height: 4px;
    width: 20%;
    background-color: #e8e8e8;
  }
`;

const ListingGrid = ({ itemList }) => {
  return (
    <Section>
      {itemList.map((item) => (
        <Link  key={item.id} to={`/items/${item.id}`} >
        <Tile >
          <img src={item.imageSrc} alt={item.name} />
          <h3 className="name">{item.name}</h3>
          <p className="latin-name">{item.latinName}</p>
        </Tile>
        </Link>
      ))}
    </Section>
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
