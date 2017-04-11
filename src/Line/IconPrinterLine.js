import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconPrinterLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconPrinterLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1440 1080c0 44.16-35.84 80-80 80s-80-35.84-80-80 35.84-80 80-80 80 35.84 80 80zM560 520H400V40h1120v480h-160V200H560v320zm1040 880h-80v-160H400v160h-80V840c0-44.16 35.92-80 80-80v160h1120V760c44.08 0 80 35.84 80 80v560zM560 1720h800v-320H560v320zm960-1120h-160v160H560V600H400c-132.32 0-240 107.68-240 240v720h240v320h1120v-320h240V840c0-132.32-107.68-240-240-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}