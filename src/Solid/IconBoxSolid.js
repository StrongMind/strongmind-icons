import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'



export default class IconBoxSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconBoxSolid"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M1468.235 0v112.941H451.765V0H0v451.878h112.941v1016.47H0V1920h451.765v-112.941h1016.47V1920h451.878v-451.652h-112.941V451.878h112.94V0h-451.877zM225.882 451.878h225.883V225.882h1016.47v225.996h225.996v1016.47h-225.996v225.77H451.765v-225.77H225.882V451.878z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}