import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconUnpublishedLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconUnpublishedLine"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M1599.04 1523.627L396.373 320.96C546.88 188.053 743.787 106.667 960 106.667c470.507 0 853.333 382.826 853.333 853.333 0 216.107-81.386 413.12-214.293 563.627M106.667 960c0-216.213 81.28-413.12 214.293-563.627L1523.627 1599.04c-150.507 132.907-347.52 214.293-563.627 214.293-470.507 0-853.333-382.826-853.333-853.333M960 0C429.76 0 0 429.76 0 960s429.76 960 960 960c530.133 0 960-429.76 960-960S1490.133 0 960 0" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}