import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconMoveRightLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconMoveRightLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M979.325 696.03l90.85-113.56L1372.6 960.5l-302.425 378.03-90.85-113.56 147.326-184.158H318V880.188h808.65L979.326 696.03zM1603 1603h-128.5V318H1603v1285z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}