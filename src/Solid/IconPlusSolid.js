import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconPlusSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconPlusSolid"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M840 0v840H0v240h840v840h240v-840h840V840h-840V0z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}