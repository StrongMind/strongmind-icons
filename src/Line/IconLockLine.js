import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'



export default class IconLockLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconLockLine"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M1581.294 1694.118c0 62.23-50.598 112.94-112.941 112.94H451.883c-62.231 0-112.942-50.71-112.942-112.94V1016.47h1242.353v677.647zm-112.941-790.589V508.235C1468.353 228.028 1240.325 0 960.118 0S451.882 228.028 451.882 508.235V903.53H226v790.589C226 1818.692 327.308 1920 451.882 1920h1016.47c124.575 0 225.883-101.308 225.883-225.882V903.529h-225.882zm-903.53-395.294c0-217.976 177.318-395.294 395.295-395.294 217.976 0 395.294 177.318 395.294 395.294V903.53H564.824V508.235zm338.824 1072.941v-338.823h112.941v338.823h-112.94z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}