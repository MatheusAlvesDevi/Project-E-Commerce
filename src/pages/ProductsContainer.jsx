import { catalog } from "../utils/catalog";
import ProductCard from "./HomePage/ProductCard";

const ProductsContainer = ({femaleProduct}) => {
    return (
        <section className="container flex flex-wrap mx-auto p-10 justify-center gap-10">
            {(femaleProduct !== null ? catalog.filter((p) => p.feminine === femaleProduct) : catalog).map((product) => (
                <ProductCard key={`product_${product.id}`} {...product}/>
                ))}
        </section>
    );
};

export default ProductsContainer;