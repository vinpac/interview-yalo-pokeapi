import React from 'react'
import cx from 'classnames'
import Layout from '@components/Layout'

interface Props {
  className?: string
}

const Index: React.FC<Props> = ({ className }) => {
  return (
    <Layout>
      <div className={cx('container py-8', className)}>
        <h1 className="text-gray-800 text-3xl font-bold">
          Poke API integration
        </h1>
        <p className="text-gray-800 text-xl font-medium">Libs Used</p>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Zustand</li>
          <li>TailwindCSS</li>
          <li>Typescript</li>
        </ul>
      </div>
    </Layout>
  )
}

export type IndexProps = Props
export default Index
