import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'



export default class IconPrinterSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconPrinterSolid"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M1440 1120c0-44.16-35.84-80-80-80s-80 35.84-80 80c0 44.24 35.84 80 80 80s80-35.76 80-80zm-880 640h800v-320H560v320zm1200-880v720h-240v320H400v-320H160V880c0-132.32 107.68-240 240-240h160v160h800V640h160c132.32 0 240 107.68 240 240zM560 480H400V0h1120v480h-160V160H560v320z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}