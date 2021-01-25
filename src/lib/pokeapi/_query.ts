import useSWR, { responseInterface } from 'swr'

export const usePokeAPI = <Data, Error>(
  endpoint: string,
): responseInterface<Data, Error> => {
  return useSWR(`https://pokeapi.co/api/v2${endpoint}`)
}
