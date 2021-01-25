import React from 'react'

interface Props {
  pokemon: PokeAPI['/pokemon']
  className?: string
}

const PokemonDescription: React.FC<Props> = ({ className, pokemon }) => {
  return (
    <span className={className}>
      Weighting <span className="underline">{pokemon.weight}kg</span>, this is a{' '}
      {pokemon.types.map((t) => t.type.name).join('/')} Pokemon
    </span>
  )
}

export type PokemonDescriptionProps = Props
export default PokemonDescription
