import React from 'react'
import cx from 'classnames'
import Button from './Button'
import { FiX } from 'react-icons/fi'
import { useFavoritePokemons } from '@lib/pokeapi/favorite'

interface Props {
  className?: string
  pokemon: PokeAPI['/pokemon']
}

const FavoritePokemon: React.FC<Props> = ({ className, pokemon }) => {
  const removePokemon = useFavoritePokemons((state) => state.removePokemon)

  const handleRemove = () => removePokemon(pokemon.id)
  return (
    <div className={cx('border rounded-xl p-4 flex relative pr-16', className)}>
      <div className="mr-2">
        <div className="w-12 h-12 bg-gray-300 rounded-md" />
      </div>
      <div>
        <span className="font-medium text-primary-500">
          {pokemon.types.map((t) => t.type.name).join(', ')}
        </span>
        <h1>{pokemon.name}</h1>
        <Button
          colorSchema="gray"
          className="absolute right-8 inset-y-0 rounded-full h-12 w-12 m-auto"
          onClick={handleRemove}
        >
          <FiX className="m-auto" />
        </Button>
      </div>
    </div>
  )
}

export type FavoritePokemonProps = Props
export default FavoritePokemon
