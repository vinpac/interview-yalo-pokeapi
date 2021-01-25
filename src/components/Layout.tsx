import React from 'react'
import cx from 'classnames'
import Toolbar from './Toolbar'

interface Props {
  className?: string
}

const Layout: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cx('', className)}>
      <Toolbar />
      {children}
    </div>
  )
}

export type LayoutProps = Props
export default Layout
