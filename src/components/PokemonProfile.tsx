import React from 'react'
import cx from 'classnames'
import Button from './Button'
import { FiHeart, FiX } from 'react-icons/fi'
import { useFavoritePokemons } from '@lib/pokeapi/favorite'

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
    <div className={cx('py-8', className)}>
      <span className="font-medium text-primary-500">
        {pokemon.types.map((t) => t.type.name).join(', ')}
      </span>
      <h1 className=" text-4xl font-bold mb-4">{pokemon.name}</h1>
      <Button colorSchema="primary" onClick={action}>
        <ActionIcon className="mr-2 inline-block" />
        {isFavorited ? 'Remove from Favorites' : 'Favorite'}
      </Button>
    </div>
  )
}

export type PokemonProfileProps = Props
export default PokemonProfile
