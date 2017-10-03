import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'



export default class IconTableLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconTableLine"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M1800 600h-480V120h420c33 0 60 27 60 60v420zm-480 600V720h480v480h-480zm480 540c0 33-27 60-60 60h-420v-480h480v420zM720 600V120h480v480H720zm0 600V720h480v480H720zm0 600v-480h480v480H720zM600 600H120V180c0-33 27-60 60-60h420v480zm-480 600V720h480v480H120zm480 600H180c-33 0-60-27-60-60v-420h480v480zM1740 0H180C80.76 0 0 80.76 0 180v1560c0 99.24 80.76 180 180 180h1560c99.24 0 180-80.76 180-180V180c0-99.24-80.76-180-180-180z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}