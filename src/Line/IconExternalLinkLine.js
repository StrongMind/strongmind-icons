import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconExternalLinkLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconExternalLinkLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1579.892 517.69L811.62 1285.96l-142.758-142.757 767.45-767.45H994.123V187.96h773.564v187.793h-1.177v636.282h-186.618V517.689zM165.724 1730.97L163 1731V509.568h611.611V696.62H351.968v846.557h844.8V1354.74h187.793v188.438h.456v187.793H165.724z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}