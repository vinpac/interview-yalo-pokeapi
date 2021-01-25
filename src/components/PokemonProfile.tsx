import React from 'react'
import cx from 'classnames'
import Button from './Button'
import { FiHeart, FiX } from 'react-icons/fi'
import { useFavoritePokemons } from '@lib/pokeapi/favorite'
import PokemonDescription from './PokemonDescription'

interface Props {
  pokemon: PokeAPI['/pokemon']
  className?: string
}

const PokemonProfile: React.FC<Props> = ({ className, pokemon }) => {
  const isFavorited = useFavoritePokemons((state) =>
    state.pokemons.some((p) => p.id === pokemon.id),
  )
  const addPokemon = useFavoritePokemons((state) => state.addPokemon)
  const removePokemon = useFavoritePokemons((state) => state.removePokemon)
  const action = () => {
    if (isFavorited) {
      removePokemon(pokemon.id)
    } else {
      addPokemon(pokemon)
    }
  }
  const ActionIcon = isFavorited ? FiX : FiHeart
  return (
    <div className={cx('pt-8 pb-4 border-b-2', className)}>
      <img src={pokemon.sprites.front_default} className="w-28 h-28" />
      <span className="font-medium text-primary-500">
        {pokemon.types.map((t) => t.type.name).join(', ')}
      </span>
      <h1 className=" text-4xl font-bold mb-1">{pokemon.name}</h1>
      <p className="text-gray-600">
        <PokemonDescription pokemon={pokemon} />
      </p>
      <div className="pt-4">
        <Button colorSchema="primary" onClick={action}>
          <ActionIcon className="mr-2 inline-block" />
          {isFavorited ? 'Remove from Favorites' : 'Favorite'}
        </Button>
      </div>
    </div>
  )
}

export type PokemonProfileProps = Props
export default PokemonProfile
