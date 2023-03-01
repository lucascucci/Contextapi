import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({data}) => {

    return (
        <>
            {data.map((data)=>(
                <ItemList data={data} 
                key={data.id} />
            ))}
        </>
    )

}

export default ItemListContainer;