import { AbilityQuery } from './ability-query';
import { PokemonQuery } from './pokemon-query';

export const RootQuery: any = {
    pokedex: async(_: any, { first, after }: any) =>await PokemonQuery.pokedex(first, after),
    pokemon: async(_: any, { id }: any) => await PokemonQuery.pokemon(id),
    abilities: async (_: any, { first, after }: any) => await AbilityQuery.abilities(first, after),
    ability: async(_: any, { id }: any) => await AbilityQuery.ability(id),
}