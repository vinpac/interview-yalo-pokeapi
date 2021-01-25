import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { FiGithub, FiHeart, FiHome, FiSearch } from 'react-icons/fi'
import ToolbarLink from './ToolbarLink'
import SearchPokemonForm from './SearchPokemonForm'

interface Props {
  className?: string
}

const Toolbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cx('bg-primary-500 pt-4 px-8 pb-4', className)}>
      <div className="container mb-4 flex items-center">
        <div className="flex mr-auto">
          <Link href="/">
            <a>
              <img src="/images/yalo-logo.svg" alt="Yalo" className="h-6" />
            </a>
          </Link>
          <a
            href="https://github.com/vinpac"
            rel="noreferrer"
            target="_blank"
            className="inline-block  px-1 rounded hover:bg-primary-600 text-primary-200 ml-2"
          >
            - by{' '}
            <span className="hover:underline">
              <FiGithub className="inline-block" /> @vinpac
            </span>
          </a>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <ToolbarLink href="/" label="Home" icon={FiHome} />
          </Link>
          <Link href="/favorites">
            <ToolbarLink
              href="/favorites"
              label="My Favorites"
              icon={FiHeart}
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="relative">
          <FiSearch
            size={24}
            className="absolute left-4 inset-y-0 m-auto text-primary-500"
          />
          <SearchPokemonForm />
        </div>
      </div>
    </div>
  )
}

export type ToolbarProps = Props
export default Toolbar
