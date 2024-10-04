import { FetchProductos } from "../../fetchData"
import {API_HOST} from '../../config'
export function PanelProductos() {
 //   const { data, loading, error } = fetchProductos(`${API_HOST}/productos`);
    const { data, loading, error } = FetchProductos('http://192.168.1.82:3300/productos');

    return (
        <div>
            <div>
                <button>Agregar</button>
                <button>Eliminar</button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {error && <tr><td>Error: {error.message}</td></tr>}
                    {loading && <tr><td>Cargando...</td></tr>}
                    {data && data.length > 0 ? (
                        data.map((PRODUCTOS) => (
                            <tr key={PRODUCTOS.id_producto}>
                                <td>{PRODUCTOS.Nombre}</td>
                            
                            </tr>
                        ))
                    ) : (
                        !loading && <tr><td>No hay productos disponibles.</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
