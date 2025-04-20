import { useState } from "react";
import ProductsContainer from "../ProductsContainer";
import ProductsFilters from "./ProductsFilters";

const MainSection = () => {
    const [femaleProduct, setFemaleProduct] = useState(null)

    return (
        <>
            <ProductsFilters setFemaleProduct = {setFemaleProduct}/>
            <ProductsContainer femaleProduct = {femaleProduct}/>
        </>

    );
};

export default MainSection;