import { useSearchParams } from "react-router-dom";
import ProductsContainer from "../ProductsContainer";
import ProductsFilters from "./ProductsFilters";

const MainSection = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <>
            <ProductsFilters setSearchParams = {setSearchParams}/>
            <ProductsContainer searchParams = {searchParams}/>
        </>

    );
};

export default MainSection;