import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'



export default class IconCheckPlusLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconCheckPlusLine"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M341.842 105h113.947v341.956h341.956v113.947H455.789v341.728H341.842V560.903H0V446.956h341.842V105zm569.77 455.823V446.876h626.71v113.947h-626.71zm683.73 398.85h113.947v854.604H341.808v-797.744h113.947v683.797H1595.34V959.673zm-472.973 176.698l717.982-701.801L1920 516.156l-797.63 779.627-364.518-356.54 79.649-81.36 284.868 278.488z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}