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
  const failed = !pokemon.isValidating && pokemon.error

  return (
    <Layout
      loading={pokemon.isValidating}
      className={failed ? 'bg-yellow-100 min-h-screen' : ''}
    >
      <div className="container">
        {pokemon.data && <PokemonProfile pokemon={pokemon.data} />}
        {failed && (
          <div className="py-8">
            <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mt-8 mb-4">
              ...
            </div>
            <h4 className="text-3xl text-center">
              No pokemon called{' '}
              <span className="font-italic underline">{slug}</span> yet
            </h4>
          </div>
        )}
      </div>
    </Layout>
  )
}

export type PokemonProps = Props
export default Pokemon
