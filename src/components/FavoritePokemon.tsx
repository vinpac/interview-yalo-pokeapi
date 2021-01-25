import React from 'react'
import cx from 'classnames'
import Button from './Button'
import { FiX } from 'react-icons/fi'
import { useFavoritePokemons } from '@lib/pokeapi/favorite'
import Link from 'next/link'
import PokemonDescription from './PokemonDescription'

interface Props {
  className?: string
  pokemon: PokeAPI['/pokemon']
}

const FavoritePokemon: React.FC<Props> = ({ className, pokemon }) => {
  const removePokemon = useFavoritePokemons((state) => state.removePokemon)

  const handleRemove = () => removePokemon(pokemon.id)
  return (
    <div className={cx('flex items-center relative pr-16', className)}>
      <Link href={`/pokemon/${pokemon.name}`}>
        <a className="mr-2">
          <img src={pokemon.sprites.front_default} className="w-24 h-24" />
        </a>
      </Link>
      <div>
        <span className="text-sm font-medium text-primary-500">
          {pokemon.types.map((t) => t.type.name).join(', ')}
        </span>
        <Link href={`/pokemon/${pokemon.name}`}>
          <a className="block text-xl font-medium">{pokemon.name}</a>
        </Link>
        <p className="text-sm text-gray-700">
          <PokemonDescription pokemon={pokemon} />
        </p>
        <Button
          colorSchema="gray"
          className="absolute right-8 inset-y-0 rounded-full h-12 w-12 m-auto bg-red-200 hover:bg-red-300"
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
