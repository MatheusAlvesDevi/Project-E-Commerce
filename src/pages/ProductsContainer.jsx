import { catalog } from "../utils/catalog";
import ProductCard from "./HomePage/ProductCard";

const ProductsContainer = () => {
    return (
        <section className="container flex flex-wrap mx-auto p-10 justify-center gap-10">
            {catalog.map((product) => (
                <ProductCard key={`product_${product.id}`} {...product}/>
                ))}
        </section>
    );
};

export default ProductsContainer;