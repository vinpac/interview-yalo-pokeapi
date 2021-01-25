import React from 'react'
import cx from 'classnames'
import Toolbar from './Toolbar'
import IndetermineActivityIndicator from './IndetermineActivityIndicator'

interface Props {
  className?: string
  loading?: boolean
}

const Layout: React.FC<Props> = ({ className, loading, children }) => {
  return (
    <div className={cx('', className)}>
      <div className="relative">
        <Toolbar />
        {loading && (
          <IndetermineActivityIndicator className="top-full absolute inset-x-0" />
        )}
      </div>
      {children}
    </div>
  )
}

export type LayoutProps = Props
export default Layout
