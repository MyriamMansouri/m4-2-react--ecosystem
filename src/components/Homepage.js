import React from "react";
import Page from "./Page";
import ListingGrid from "./ListingGrid";
import { items } from "../data";

const Homepage = () => {
    
  return (
    <Page>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <h2>Browse items:</h2>
      <ListingGrid itemList={Object.values(items)} />
    </Page>
  );
};

export default Homepage;
