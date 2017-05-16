import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconCalendarMonthLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconCalendarMonthLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160zM320 720h1280v1040H320V720z"/>
        <path d="M880 1240h240v-240H880zM1280 1240h240v-240h-240zM880 1640h240v-240H880zM480 1640h240v-240H480zM1280 1640h240v-240h-240z"/>
    </g>
</svg>`}
      />
    )
  }
}