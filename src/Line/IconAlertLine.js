import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconAlertLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconAlertLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M960 240c-265.12 0-480 214.88-480 480v80c0 88.4-71.6 160-160 160H160v400h1600V960h-160c-88.4 0-160-71.6-160-160v-80c0-265.12-214.88-480-480-480m0 160c176.48 0 320 143.52 320 320v80c0 176.48 143.52 320 320 320v80H320v-80c176.48 0 320-143.52 320-320v-80c0-176.48 143.52-320 320-320zm0 1309.464c151.28 0 273.76-119.76 280-269.44H680c6.24 149.68 128.72 269.44 280 269.44z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}