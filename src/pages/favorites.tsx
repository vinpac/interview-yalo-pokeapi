import React from 'react'
import Layout from '@components/Layout'
import { useFavoritePokemons } from '@lib/pokeapi/favorite'
import FavoritePokemon from '@components/FavoritePokemon'
import { FiHeart } from 'react-icons/fi'

const Favorites: React.FC = () => {
  const pokemons = useFavoritePokemons((state) => state.pokemons)

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-gray-800 text-3xl font-medium mb-4">Favorites</h1>
        <div className="space-y-4">
          {pokemons.map((pokemon) => (
            <FavoritePokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        {!pokemons.length && (
          <div className="text-center rounded-xl max-w-xs p-8 bg-gray-100 space-y-4 mx-auto mt-8">
            <FiHeart size={64} className="mx-auto" />
            <h3 className="text-xl text-gray-800">
              Favorite pokemons will appear here
            </h3>
            <p className="text-gray-500">No Pokemon favorited yet...</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Favorites
