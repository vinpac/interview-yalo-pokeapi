import React, { useCallback, useRef } from 'react'
import cx from 'classnames'
import Input from './Input'
import { useRouter } from 'next/router'
import { FiSearch } from 'react-icons/fi'
import ReturnButton from './ReturnButton'

interface Props {
  className?: string
}

const SearchPokemonForm: React.FC<Props> = ({ className }) => {
  const timeoutRef = useRef<number | null>(null)
  const router = useRouter()
  const valueRef = useRef('')

  const updateURL = useCallback(
    (value?: string) => {
      if (!value) {
        return
      }

      router.push(`/pokemon/${value}`)
    },
    [router],
  )

  const handleFocus = useCallback(() => {
    updateURL(valueRef.current)
  }, [updateURL])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        updateURL(valueRef.current)
      }
    },
    [updateURL],
  )

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.trim()
      valueRef.current = value

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      if (router.pathname === '/pokemon/[slug]') {
        timeoutRef.current = window.setTimeout(() => updateURL(value), 200)
      }
    },
    [updateURL, router.pathname],
  )
  const slug = String(router.query.slug || '')
  return (
    <div className={cx('relative', className)}>
      <FiSearch
        size={24}
        className="absolute left-4 inset-y-0 m-auto text-primary-500 pointer-events-none"
      />
      <Input
        colorSchema="white"
        className="pl-12 w-full"
        placeholder="Try charizard, charmander, pikachu..."
        size="md"
        onChange={handleInputChange as any}
        onKeyDown={handleKeyDown as any}
        onFocus={handleFocus as any}
        defaultValue={slug}
      />
      <ReturnButton className="right-2 absolute inset-y-0 m-auto pointer-events-none" />
    </div>
  )
}

export type SearchPokemonFormProps = Props
export default SearchPokemonForm
