import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconBlueprintLockSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconBlueprintLockSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M1520.5 319.996H360v1281h240v-160h-80v-961h961v80h160v-240z"/>
        <path d="M40 0v1279.996h240v-160h-80v-960h960v80h160V0zM1582.857 1102.567h-445.716v-80.144c0-122.867 99.988-222.856 222.86-222.856 122.868 0 222.856 99.99 222.856 222.856v80.144zm-222.857 520c-61.509 0-111.429-49.92-111.429-111.43 0-61.508 49.92-111.427 111.43-111.427 61.506 0 111.426 49.92 111.426 111.427 0 61.51-49.92 111.43-111.427 111.43zm371.427-520v-91.144c0-204.804-166.623-371.427-371.427-371.427-204.806 0-371.429 166.623-371.429 371.427v91.144c-81.937 0-148.57 66.561-148.57 148.57v520c0 81.94 66.633 148.573 148.57 148.573h742.856c81.94 0 148.573-66.634 148.573-148.573v-520c0-82.009-66.634-148.57-148.573-148.57z"/>
    </g>
</svg>`}
      />
    )
  }
}