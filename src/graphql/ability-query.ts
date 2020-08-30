import axios from "axios";
import { getPageInfo } from '../utils/page-info';
import { getIdFromUrl } from '../utils';
require('dotenv').config();

const baseURL = process.env.POKE_API_URL;
export module AbilityQuery {
    export const abilities = async (
        first: number | null,
        after: number | null): Promise<any> => {
        const response = await axios.get(`${baseURL}/ability/?offset=${after}&limit=${first}`);
        let result = response.data;
        result.pageInfo = getPageInfo(result.count, first, after);
        result.nodes = result.results.map(async (x) => {
            return await ability(getIdFromUrl(x.url))
        });

        return result;
    }

    export const ability = async (id: number): Promise<any> => {
        const response = await axios.get(`${baseURL}/ability/${id}`);
        const data = response.data;
        return {
            id: data.id,
            name: data.name,
            isMainSeries: data.is_main_series,
            generation: {
                id: getIdFromUrl(data.generation.url),
                name: data.generation.name
            }
        };
    }
}
