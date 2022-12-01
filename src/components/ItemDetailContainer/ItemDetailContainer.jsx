import "./ItemDetailContainer.css";
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProduct } from "../../assets/firebase"
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect( () => {
        getProduct(id).then(productos => {

            setProducto(productos)
        })
    }, [id]);

    return (
        <div className="homeDetalleProducto">
            <div className="card mb-3 container shadow p-3 mb-5 bg-body rounded detalleProducto">
                <ItemDetail producto={producto}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
