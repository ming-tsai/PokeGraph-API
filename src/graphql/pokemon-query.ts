import axios from "axios";
import { getPageInfo } from '../utils/page-info';
import { getIdFromUrl } from '../utils';
require('dotenv').config();

const baseURL = process.env.POKE_API_URL;
export module PokemonQuery {
    export const pokedex = async (
        first: number | null,
        after: number | null): Promise<any> => {
        const response = await axios.get(`${baseURL}/pokemon/?offset=${after}&limit=${first}`);
        let result = response.data;
        result.pageInfo = getPageInfo(result.count, first, after);
        result.nodes = result.results.map(async (x) => {
            return await pokemon(getIdFromUrl(x.url));
        });
        return result;
    }

    export const pokemon = async (id: number): Promise<any> => {
        const response = await axios.get(`${baseURL}/pokemon/${id}`);
        const data = response.data;
        return {
            id: data.id,
            name: data.name,
            baseExperience: data.base_experience,
            isDefault: data.is_default,
            order: data.order,
            height: data.height,
            weight: data.weight
        };
    }
}
