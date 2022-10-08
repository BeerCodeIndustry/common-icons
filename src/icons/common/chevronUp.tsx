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
        d="M15.4062 28.8359L15.6797 29.1094C15.875 29.3047 16.1484 29.3047 16.3438 29.1094L24 21.4922L31.6172 29.1094C31.8125 29.3047 32.0859 29.3047 32.2812 29.1094L32.5547 28.8359C32.75 28.6406 32.75 28.3672 32.5547 28.1719L24.3125 19.9297C24.1172 19.7344 23.8438 19.7344 23.6484 19.9297L15.4062 28.1719C15.2109 28.3672 15.2109 28.6406 15.4062 28.8359Z"
        fill="#314F6F"
      />
    </svg>
  )
}
