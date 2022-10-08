import * as React from 'react'
import { IconProps } from '../../types'

export default (props: IconProps) => {
  return (
    <svg
      {...props}
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.2969 33.0938L28.5703 32.8203C28.7656 32.625 28.7656 32.3516 28.5703 32.1562L20.9531 24.5L28.5703 16.8828C28.7656 16.6875 28.7656 16.4141 28.5703 16.2188L28.2969 15.9453C28.1016 15.75 27.8281 15.75 27.6328 15.9453L19.3906 24.1875C19.1953 24.3828 19.1953 24.6562 19.3906 24.8516L27.6328 33.0938C27.8281 33.2891 28.1016 33.2891 28.2969 33.0938Z"
        fill="#314F6F"
      />
    </svg>
  )
}