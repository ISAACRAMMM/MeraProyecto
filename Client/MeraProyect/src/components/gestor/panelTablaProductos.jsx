import { fetchProductos } from "../../fetchData"
export function PanelProductos() {
    const { data, loading, error } = fetchProductos('http://192.168.1.81:3300/productos');

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
                        data.map((producto) => (
                            <tr key={producto.id_producto}>
                                <td>{producto.nombre}</td>
                            
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
