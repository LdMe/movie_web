import { datos } from "./datos.js";
import { token } from "./api_key.js";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

async function fetchData(query, page = 1) {
    try {
        const url = new URL(BASE_URL);
        url.searchParams.append("query", query);
        url.searchParams.append("page", page);
        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response)
        if (!response.ok) {
            if (response.status === 401) {
                return {
                    error: "No estás autorizado"
                }
            }
            return {
                error: "Ha habido un error al cargar los datos"
            }
        }
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error(error);
        return datos;
    }


}

export default fetchData;
export {fetchData}
