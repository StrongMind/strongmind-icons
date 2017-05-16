import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconQuizStatsHighLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconQuizStatsHighLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M795 771h235.917l-441.544 441.632 102.968 102.896L1134 874.029V1110h145V626H795z"/>
        <path d="M960 1614.545c-361.496 0-654.545-293.05-654.545-654.545 0-361.495 293.049-654.545 654.545-654.545 361.495 0 654.545 293.05 654.545 654.545 0 361.495-293.05 654.545-654.545 654.545M960 160c-441.828 0-800 358.172-800 800 0 441.827 358.172 800 800 800s800-358.173 800-800c0-441.828-358.172-800-800-800"/>
    </g>
</svg>`}
      />
    )
  }
}