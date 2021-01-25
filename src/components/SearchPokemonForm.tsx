import React, { useCallback, useRef } from 'react'
import cx from 'classnames'
import Input from './Input'
import Router, { useRouter } from 'next/router'

interface Props {
  className?: string
}

const SearchPokemonForm: React.FC<Props> = ({ className }) => {
  const timeoutRef = useRef<number | null>(null)
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.trim()

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      const updateURL = () => {
        if (!value) {
          Router.push('/')
          return
        }

        Router.push(`/pokemon/${value}`)
      }

      timeoutRef.current = window.setTimeout(updateURL, 200)
    },
    [],
  )
  const router = useRouter()
  const slug = String(router.query.slug || '')
  return (
    <div className={cx('', className)}>
      <Input
        colorSchema="white"
        className="pl-12 w-full"
        placeholder="Try charizard, charmander, pikachu..."
        size="md"
        onChange={handleInputChange as any}
        defaultValue={slug}
      />
    </div>
  )
}

export type SearchPokemonFormProps = Props
export default SearchPokemonForm
