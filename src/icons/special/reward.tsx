import * as React from 'react'
import { IconProps } from '../../types'

export default (props: IconProps) => {
  return (
    <svg
      {...props}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 30V47L25 43L33 47V29"
        stroke="#E45851"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <path
        d="M25 9C22.6131 9 20.3239 9.94821 18.636 11.636C16.9482 13.3239 16 15.6131 16 18C16 20.3869 16.9482 22.6761 18.636 24.364C20.3239 26.0518 22.6131 27 25 27C27.3869 27 29.6761 26.0518 31.364 24.364C33.0518 22.6761 34 20.3869 34 18C34 15.6131 33.0518 13.3239 31.364 11.636C29.6761 9.94821 27.3869 9 25 9Z"
        stroke="#E45851"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M28.315 5.947L32.586 5.059L33.897 9.22L38.04 10.586L37.095 14.845L40 18.099L37.053 21.315L37.941 25.586L33.78 26.897L32.414 31.04L28.155 30.095L24.901 33L21.685 30.053L17.414 30.941L16.103 26.78L11.96 25.414L12.905 21.155L10 17.901L12.947 14.685L12.059 10.414L16.22 9.103L17.586 4.96L21.845 5.905L25.099 3L28.315 5.947Z"
        stroke="#E45851"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
