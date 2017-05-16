import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconMoveLeftLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconMoveLeftLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M941.675 696.03l-90.85-113.56L548.4 960.5l302.425 378.03 90.85-113.56-147.325-184.158H1603V880.188H794.35L941.675 696.03zM318 1603h128.5V318H318v1285z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}