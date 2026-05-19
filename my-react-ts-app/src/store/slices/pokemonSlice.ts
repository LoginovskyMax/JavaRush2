import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IPokemon {
    name: string,
    id: number,
    sprites: {
        back_default: string,
        front_default: string
    }
}

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    keepUnusedDataFor: 60 * 5,
    tagTypes: ['Pokemon'],
    endpoints: (build) => ({
      getPokemon: build.query<IPokemon, string>({
        query: (name) => `pokemon/${name}`,
        transformResponse: (response:IPokemon) => {
            // логика по изменению данных
            return response
        },
        providesTags: ['Pokemon'],
    }),
      editPokemon: build.mutation<IPokemon, Partial<IPokemon> & Pick<IPokemon, 'id'>>({
        query: (body) => ({
          url: `pokemon/${body.id}`,
          method: 'POST',
          body,
      }),
      invalidatesTags: ['Pokemon']
    }),
  }),
})

export const { useGetPokemonQuery, useEditPokemonMutation } = pokemonApi