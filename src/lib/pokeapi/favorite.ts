import create from 'zustand'

export const useFavoritePokemons = create<{
  pokemons: PokeAPI['/pokemon'][]
  removePokemon: (id: number) => void
  addPokemon: (pokemon: PokeAPI['/pokemon']) => void
}>((set) => ({
  pokemons: [],
  removePokemon: (id: number) =>
    set((state) => ({
      pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
    })),
  addPokemon: (pokemon: PokeAPI['/pokemon']) =>
    set((state) => ({ pokemons: [pokemon, ...state.pokemons] })),
}))
