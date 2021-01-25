import React, { InputHTMLAttributes, DetailedHTMLProps } from 'react'
import cx from 'classnames'

export interface InputProps {
  readonly as?:
    | React.ComponentType<{
        ref?: any
        className: string
        children?: React.ReactNode
      }>
    | string
  readonly className?: string
  readonly colorSchema?: keyof typeof colorMapCx
  readonly size?: keyof typeof sizeMapCx
}

const Input = React.forwardRef<
  any,
  InputProps &
    Omit<
      DetailedHTMLProps<InputHTMLAttributes<'Input'>, 'Input'>,
      keyof InputProps
    >
>(
  (
    {
      as: Component = 'input',
      className,
      colorSchema = 'gray',
      size = 'base',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={cx(
          'hover:shadow-outline border-2 focus:outline-none focus:ring-4 ring-opacity-30',
          colorSchema && colorMapCx[colorSchema],
          size && sizeMapCx[size],
          className,
        )}
      >
        {children}
      </Component>
    )
  },
)

Input.displayName = 'Input'

const colorMapCx = {
  gray:
    'bg-gray-100 focus:bg-white border-gray-300 hover:border-gray-400 text-gray-900 ring-primary-400 focus:border-primary-500',
  white: 'bg-white border-white text-gray-900 ring-white',
} as const

const sizeMapCx = {
  xs: 'px-2 py-1 rounded text-xs',
  sm: 'px-2 py-1 rounded-md text-sm',
  base: 'px-3 py-2 rounded-md text-base',
  md: 'px-4 py-3 rounded-md',
  lg: 'px-5 py-4 rounded-lg text-lg',
  xl: 'px-6 py-5 rounded-lg text-xl',
} as const

export { Input }
export default Input
