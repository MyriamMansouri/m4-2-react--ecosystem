import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(260px, 1fr) );
  justify-content: space-between;
  row-gap:30px;
`;

const Tile = styled.div`
  width :250px;
  display: flex;
  flex-flow:column nowrap;
  align-items:center;
  box-shadow: 0px 0px 31px 14px rgba(232,232,232,0.48);
  border-radius:10px;
  margin:20px auto;
  padding:10px 10px 25px ;


  img {
    width: 150px;
    border-radius:10px;
    margin-top:-25px;
  }
  .latin-name{
    font-style: italic;
  }
  .name{
    position: relative;
  }
  .name:before {
    content:"";
    position:absolute;
    left:25%;
    bottom:-20px;
    height:4px;
    width:50%;
    background-color:#e8e8e8;
  }
`;

const ListingGrid = ({ itemList }) => {
  return (
    <Section>
      {itemList.map((item) => (
        <Tile key={item.id}>
          <img src={item.imageSrc} alt={item.name} />
          <h2 className="name" >{item.name}</h2>
          <p className="latin-name">{item.latinName}</p>
        </Tile>
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
