import React from 'react'
import s from './IndetermineActivityIndicator.module.css'
import cx from 'classnames'

interface Props {
  className?: string
}

const IndetermineActivityIndicator: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cx(
        s.slider,
        'h-2',
        className,
        !className?.includes('absolute') && 'relative',
      )}
    >
      <div className={`bg-yellow-500 ${s.line}`} />
      <div className={`bg-yellow-500 ${s.subline} ${s.inc}`} />
      <div className={`bg-yellow-500 ${s.subline} ${s.dec}`} />
    </div>
  )
}

export type IndetermineActivityIndicatorProps = Props
export default IndetermineActivityIndicator
