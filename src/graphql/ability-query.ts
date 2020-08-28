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
        result.nodes = result.results.map((x) => {
            return {
                name: x.name,
                id: getIdFromUrl(x.url)
            }
        });
        return result;
    }

    export const ability = async (): Promise<any> => {
        throw new Error("Not implement");
    }
}
