import { AbilityQuery } from './ability-query';

export const RootQuery: any = {
    abilities: async (_: any, { first, after }: any) => await AbilityQuery.abilities(first, after)
}