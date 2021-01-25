import React, { forwardRef } from 'react'

import cx from 'classnames'

interface Props {
  className?: string
  label: string
  href: string
  icon: React.ComponentType<{ size?: number }>
}

const ToolbarLink = forwardRef<any, Props>(
  ({ className, icon: Icon, label, href, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cx(
          'text-primary-200 hover:text-white hover:underline flex items-center',
          className,
        )}
        {...props}
      >
        <div className="h-10 w-10 hover:bg-primary-600 bg-primary-600 md:bg-primary-500  rounded-full flex items-center justify-center md:mr-2 ">
          <Icon size={21} />
        </div>
        <span className="hidden md:inline text-white font-medium">{label}</span>
      </a>
    )
  },
)

export type ToolbarLinkProps = Props
export default ToolbarLink
