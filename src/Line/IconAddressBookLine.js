import React, { Component } from 'react'
import BaseIcon from '../IconBase'

export default class IconAddressBookLine extends Component {
  render() {
    return (
      <BaseIcon
        {...this.props}
        name="IconAddressBookLine"
        viewBox="0 0 1920 1920">
        
    <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <path d="M1280 480V160H320v320c-88.32 0-160 71.6-160 160v960c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160V640c0-88.4-71.68-160-160-160h-320zM480 320h240v160H480V320zm400 0h240v160H880V320zM320 640h1280v960H320V640z"/>
        <path d="M751 1120c-106 5.333-191 98.133-191 213.333V1440h800v-106.667c0-115.2-84-208-191-213.333-54 65.067-128 106.667-209 106.667s-155-41.6-209-106.667zM960 800c-88 0-160 71.68-160 160s72 160 160 160 160-71.68 160-160-72-160-160-160z"/>
    </g>

      </BaseIcon>
    )
  }
}