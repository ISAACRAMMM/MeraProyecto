import { fetchProductos } from "../../fetchData"
import {API_HOST} from "../../config"


export function PanelProductos() {
    const { data, loading, error} = fetchProductos(`${API_HOST}/productos`)
    return (
        <div>
            {error && <li> Error:{error}</li>}
            {loading && <li> Loading:{loading}</li>}
            {data?.map()}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}