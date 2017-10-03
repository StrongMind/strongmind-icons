import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'



export default class IconExpandLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconExpandLine"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M1750.588 113C1843.991 113 1920 189.01 1920 282.412v1185.882h-112.941V282.412c0-31.06-25.412-56.47-56.47-56.47H169.411c-31.06 0-56.47 25.41-56.47 56.47v1185.882H0V282.412C0 189.009 76.01 113 169.412 113h1581.176zm-734.117 1242.353H903.529V701.085L661.158 943.569l-79.963-79.962L960 484.915l378.805 378.692-79.963 79.962-242.371-242.484v654.268zM0 1807.118v-112.942h1920v112.942H0z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}