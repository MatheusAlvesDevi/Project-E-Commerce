import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CartItem = () => {
    return(
        <article className="flex bg-stone-100 p-1 border rounded-mg relative">
            <img src="" alt="" className="h-24"/>
            <button className="text-right text-l fixed top-0 right-2 text-slate-950">
                <FontAwesomeIcon icon={faXmark}/>
            </button>
            <div>
                <p>nome</p>
                <p>tamanho</p>
                <p>preço</p>
            </div>
        </article>
    );
};

export default CartItem;