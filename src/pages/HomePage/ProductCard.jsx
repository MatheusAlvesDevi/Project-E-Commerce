import { catalog } from "../../utils/catalog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCartContext  } from "../../contexts/CartContext";

const ProductCard = ({id, brand, name, price, image, feminine}) => {
    const {addToCart} = useCartContext();
    
    return (
        <article className="card-produto group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex-col justify-around border-2 border-gray-200 rounded-lg">
            <img src={image} alt={`Imagem do Produto ${id}`}  className="group-hover:scale-110 rounded-lg mx-4 my-3 transition duration-200"/>
            <p className="mx-4 text-sm text-slate-500 ">{brand}</p>
            <p className="mx-4 text-sm">{name}</p>
            <p className="mx-4 text-sm text-green-700">{price}</p>
            <button className="bg-indigo-950 rounded-md mx-13 my-2 text-slate-100 hover:bg-indigo-800 group w-48" onClick={() => addToCart(id)}><FontAwesomeIcon icon={faCartPlus}/></button>

        </article>
    );
};

export default ProductCard;