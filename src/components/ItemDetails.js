import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";
import Page from "./Page";

const Wrapper = styled.section`
  display: flex;
  .item-img {
    width: 400px;
    height: 400px;
    border-radius: 15px;
  }
  .item {
    margin-left: 50px;
  }
  .name {
    margin: 0;
  }
  .latin-name {
    margin: 0 0 45px 0;
  }
  .origin,
  .latin-name {
    font-style: italic;
  }
  .button {
    color: white;
    background-color: #4b1ce6;
    border: none;
    padding: 16px 45px;
    border-radius: 6px;
    font-size: 0.9rem;
    margin: 20px 0;
    cursor: pointer;
  }
  button:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
  .seller {
    display: flex;
    align-items: center;
  }
  .seller-img {
    border-radius: 50%;
    height: 45px;
    margin-right: 10px;
  }
`;

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  const seller = sellers[item.sellerId];
  return (
    <Page>
      <Wrapper>
        <img className="item-img" src={item.imageSrc} alt={item.name} />
        <div className="item">
          <h2 className="name">{item.name}</h2>
          <p className="latin-name">{item.latinName}</p>
          <p className="description">{item.description}</p>
          <p className="origin">
            Product of <strong>{item.countryOfOrigin}</strong>
          </p>
          <button
            className="button"
            disabled={item.quantity > 0 ? false : true}
          >
            {item.quantity > 0 ? `${item.price}$ - Buy now` : `Out of stock`}
          </button>
          <p className="seller">
            <img
              className="seller-img"
              src={seller.avatarSrc}
              alt={seller.id}
            />
            Sold by: &nbsp; <strong> {seller.storeName}</strong>
          </p>
        </div>
      </Wrapper>
    </Page>
  );
};

export default ItemDetails;
