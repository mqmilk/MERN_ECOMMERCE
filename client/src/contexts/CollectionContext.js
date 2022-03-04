import { createContext } from "react";

//import SHOP_DATA from "../data/shopdata";

const CollectionContext = createContext(
    {
        categories: [],
        products: [],
        searchedProducts: [],
        searchProduct: () => {}
    }
);

export default CollectionContext;