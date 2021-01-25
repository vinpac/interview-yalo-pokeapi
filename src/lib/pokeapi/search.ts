import { usePokeAPI } from './_query'

export const useSearchPokemonByName = (name: string) => {
  return usePokeAPI<PokeAPI['/pokemon'], Error>(`/pokemon/${name}`)
}
