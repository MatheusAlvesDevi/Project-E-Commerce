

const ProductsFilters = ({setSearchParams}) => {
    return (
        <section className="flex justify-center item-center py-8"> 
            <input id="filter-0"
             type="radio"
              name="filter-selection" 
              className="hidden"
              onClick={() => setSearchParams({})} />
            <label htmlFor="filter-0" 
            className="rounded-s-lg 
            bg-slate-950 
            hover:bg-slate-800 
            p-2 text-sm 
            text-slate-100 
            cursor-pointer">Todos
            </label>
            <input id="filter-1" 
            type="radio" 
            name="filter-selection" 
            className="hidden" />
            <label htmlFor="filter-1" 
            className=" bg-slate-950 
            hover:bg-slate-800 
            p-2 text-sm 
            text-slate-100 
            cursor-pointer"
            onClick={() => setSearchParams({filterby: "masc"})}>
            Masculino
            </label>
            <input id="filter-2" 
            type="radio" 
            name="filter-selection" 
            className="hidden" />
            <label htmlFor="filter-2" 
            dir="rtl" 
            className="rounded-s-lg 
            bg-slate-950 
            hover:bg-slate-800 
            p-2 text-sm 
            text-slate-100 
            cursor-pointer"
            onClick={() => setSearchParams({filterby: "fem"})}>
            Feminino
            </label>
        </section>
    );
};

export default ProductsFilters;