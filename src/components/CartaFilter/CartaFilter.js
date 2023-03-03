import { usePeliContext } from "../../context/PeliContext";


const CartaFilter = () => {

    const {data} = usePeliContext();

    return(
        <div>
            <span>{data.titulo}</span>
        </div>
    )

}

export default CartaFilter;
