import '../../css/itemList.css'
import { Link } from 'react-router-dom';

const ItemList = ({data}) => {
    
    return(
            <>
                <div className='card-container'>
                    <h1>{data.titulo}</h1>
                    <img className="img" src={data.imagen} alt='pelicula'/>
                </div>
                <div>
                <Link to={`/carta`}></Link><button>Detalles</button>
                </div>
            </>
            )
    
}

export default ItemList;