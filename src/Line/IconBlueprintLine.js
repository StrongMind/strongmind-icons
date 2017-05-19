import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconBlueprintLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconBlueprintLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M1757.5 1597h159.501v-239.251H1757.5zM1757.5 1278h159.501v-239.25H1757.5zM720.75 1597h159.5v-239.25h-159.5zM721.747 1278h159.5v-239.25h-159.5zM1359.747 1916h239.25v-159.5h-239.25zM1040.747 1916h239.251v-159.5h-239.251zM1358.75 879.25H1598v-159.5h-239.25zM1039.75 879.25H1279v-159.5h-239.25z"/>
        <path d="M481.5 1438.497h79.75v159.5H322V321h1276.997v239.25h-159.5V480.5H481.5z"/>
        <path d="M880.25 879.25v80.747h-159.5V719.75H960v159.5zM720.75 1676.75V1916H960v-159.5h-79.75v-79.75z"/>
        <path d="M3 2v1276h239.25v-159.5H162.5v-957h957v79.75H1279V2zM1677.75 719.75v159.5h79.75V959H1917V719.75zM1757.5 1676.75v79.75h-79.75V1916H1917v-239.25z"/>
    </g>
</svg>`}
      />
    )
  }
}