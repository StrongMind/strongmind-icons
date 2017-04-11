import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconAddSolid (props) {
  return (
    <SVGIcon
      {...props}
      name="IconAddSolid"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M960 1600c-352.88 0-640-287.12-640-640s287.12-640 640-640 640 287.12 640 640-287.12 640-640 640m0-1440c-441.12 0-800 358.88-800 800s358.88 800 800 800 800-358.88 800-800-358.88-800-800-800m80 400H880v320H560v160h320v320h160v-320h320V880h-320V560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}