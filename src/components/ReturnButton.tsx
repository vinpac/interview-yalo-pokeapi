import React from 'react'
import cx from 'classnames'
import { FiCornerDownLeft } from 'react-icons/fi'

export interface ReturnButtonProps {
  readonly className?: string
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ className }) => {
  return (
    <span
      className={cx(
        'w-8 h-8 rounded-lg border-2 block float-right text-center leading-7 border-gray-700 text-gray-800',
        className,
      )}
    >
      <FiCornerDownLeft size={18} className="inline-block" />
    </span>
  )
}

ReturnButton.displayName = 'ReturnButton'

export { ReturnButton }
export default ReturnButton
