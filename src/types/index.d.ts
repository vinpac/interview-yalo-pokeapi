import { Pokemon } from './pokeapi'

declare global {
  export interface PokeAPI {
    '/pokemon': Pokemon
  }
}
