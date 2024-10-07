import { FetchData, FetchDataPost } from "../../fetchData"
import { API_HOST } from '../../config'
import { useState } from "react";

const Host = 'http://192.168.1.81:3300'



/*----------------------------------------------------------------
AGREGAR
----------------------------------------------------------------*/

function Agregar() {
    const { data, loading, error } = FetchData(`${Host}/get/subcategorias`);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);


    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [subcategoria, setSubcategoria] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const producto = {
            nombre,
            descripcion,
            subcategoria
        };

        try {
            const response = await FetchDataPost(`${Host}/new/producto`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(producto),
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            console.log('Producto creado:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button className="btn btn-outline-success " onClick={handleShow}>
                <span className="material-symbols-outlined ">
                    add_circle
                </span>
            </button>

            {showModal && (
                <div
                    className="modal show d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header mb-1">
                                <h5 className="modal-title">Agregar producto</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleClose}
                                ></button>
                            </div>
                            <div className="modal-body">

                                <div className="mb-3">
                                    <form onSubmit={handleSubmit} method="POST" className="form ">
                                        <div className="form-floating mb-3">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nombreProducto"
                                                    placeholder="Nombre del producto"
                                                    value={nombre}
                                                    onChange={(e) => setNombre(e.target.value)}
                                                    required
                                                />
                                                <label htmlFor="nombreProducto">Nombre del Producto</label>
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <textarea
                                                className="form-control"
                                                placeholder="Leave a comment here"
                                                id="descripcionProducto"
                                                style={{ height: '150px' }}
                                                value={descripcion}
                                                onChange={(e) => setDescripcion(e.target.value)}
                                            ></textarea>
                                            <label htmlFor="floatingTextarea2">Descripcion</label>
                                        </div>


                                        <div className="form-floating">
                                            <select
                                                className="form-select"
                                                id="subcategoriaProducto"
                                                value={subcategoria} // Establecer el valor del select
                                                onChange={(e) => setSubcategoria(e.target.value)} // Captura el valor seleccionado
                                                required
                                            >
                                                <option value=""></option>
                                                {error && <option> Error: {error.message} </option>}
                                                {loading && <option>Cargando...</option>}
                                                {data && data.length > 0 ? (
                                                    data.map((SUB_CATEGORIAS_PRODUCTOS) => (
                                                        <option key={SUB_CATEGORIAS_PRODUCTOS.Id_subcategoria} value={SUB_CATEGORIAS_PRODUCTOS.Id_subcategoria}>
                                                            {SUB_CATEGORIAS_PRODUCTOS.Nombre}
                                                        </option>
                                                    ))
                                                ) : (
                                                    !loading && <option>No hay productos disponibles.</option>
                                                )}
                                            </select>
                                            <label htmlFor="subcategoriaProducto">Selecciona una subcategoría</label>
                                        </div>
                                        <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleClose}
                                >
                                    Cerrar
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Guardar Cambios
                                </button>
                            </div>

                                    </form>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

/*----------------------------------------------------------------
ACTUALIZAR
----------------------------------------------------------------*/

function Actualizar(id) {

    const { data: producto, loading, error } = FetchData(`${Host}/get/producto/${id.id}`);
    const { data: subcategorias, loading: loadingSub, error: errorSub } = FetchData(`${Host}/get/subcategorias`);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (

        <div>
            <button className="btn btn-warning" onClick={handleShow}>
                <span className="material-symbols-outlined">edit</span>
            </button>

            {showModal && (
                <div
                    className="modal show d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Actualizar producto</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleClose}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form action="post" className="form">
                                    {/* Manejo de errores y carga */}
                                    {error && <label>Error: {error.message}</label>}
                                    {loading && <label>Cargando...</label>}

                                    {/* Mostrar los datos del producto */}
                                    {producto && (
                                        <>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nombreProducto"
                                                    defaultValue={producto.Nombre}
                                                    placeholder="Nombre producto"
                                                    required
                                                />
                                                <label htmlFor="nombreProducto">Nombre</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <textarea
                                                    className="form-control"
                                                    id="descripcionProducto"
                                                    defaultValue={producto.Descripcion}
                                                    style={{ height: '150px' }}
                                                    placeholder="Descripción"
                                                ></textarea>
                                                <label htmlFor="descripcionProducto">Descripción</label>
                                            </div>


                                            <div className="form-floating mb-3">
                                                <select className="form-select" id="subcategoriaProducto">
                                                    {errorSub && <option>Error: {errorSub.message}</option>}
                                                    {loadingSub && <option>Cargando subcategorías...</option>}
                                                    {subcategorias && subcategorias.length > 0 ? (
                                                        subcategorias.map((subcategoria) => (
                                                            <option
                                                                key={subcategoria.Id_subcategoria}
                                                                value={subcategoria.Id_subcategoria}
                                                            >
                                                                {subcategoria.Nombre}
                                                            </option>
                                                        ))
                                                    ) : (
                                                        !loadingSub && <option>No hay subcategorías disponibles.</option>
                                                    )}
                                                </select>
                                                <label htmlFor="subcategoriaProducto">Selecciona una subcategoría</label>
                                            </div>
                                        </>
                                    )}
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                    Cerrar
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}




/*----------------------------------------------------------------
MOSTRAR
----------------------------------------------------------------*/

export function PanelProductos() {
    //   const { data, loading, error } = FetchProductos(`${API_HOST}/productos`);
    const { data, loading, error } = FetchData(`${Host}/get/productos`);

    return (
        <div className=" ms-5 mt-3 pt-5  me-5">

            <Agregar />

            <div className=" mt-5 table-responsive">
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Subcategoria</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {error && <tr><td>Error: {error.message}</td></tr>}
                        {loading && <tr><td>Cargando...</td></tr>}
                        {data && data.length > 0 ? (
                            data.map((PRODUCTOS) => (
                                <tr key={PRODUCTOS.id_producto}>
                                    <td>{PRODUCTOS.Nombre}</td>
                                    <td>{PRODUCTOS.Descripcion}</td>
                                    <td>{PRODUCTOS.Id_subcategorias}</td>
                                    <td><Actualizar id={PRODUCTOS.id_producto} /></td>
                                    <td><button className="btn btn-outline-danger">
                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button></td>

                                </tr>
                            ))
                        ) : (
                            !loading && <tr><td>No hay productos disponibles.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}


function Eliminar(id) {

}

