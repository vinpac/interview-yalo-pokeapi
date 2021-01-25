import React from 'react'
import { useSearchPokemonByName } from '@lib/pokeapi/search'
import { useRouter } from 'next/router'
import Layout from '@components/Layout'
import PokemonProfile from '@components/PokemonProfile'

interface Props {
  className?: string
}

const Pokemon: React.FC<Props> = () => {
  const router = useRouter()
  const slug = String(router.query.slug)
  const pokemon = useSearchPokemonByName(slug)

  return (
    <Layout>
      <img
        src={`http://pokeapi.co/media/sprites/pokemon/${pokemon.data?.id}.png`}
        alt=""
        className="w-8"
      />
      <div className="container">
        {pokemon.data && <PokemonProfile pokemon={pokemon.data} />}
      </div>
    </Layout>
  )
}

export type PokemonProps = Props
export default Pokemon
