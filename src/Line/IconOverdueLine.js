import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'



export default class IconOverdueLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconOverdueLine"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M720 0h480v1280H720V0zm160 160v960h160V160H880zM720 1440h480v480H720v-480zm160 160v160h160v-160H880z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}