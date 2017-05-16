import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconQuizStatsTimeSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconQuizStatsTimeSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M1040 560H880v400c0 21.2 8.4 41.52 23.44 56.56l240 240 113.12-113.12L1040 926.88V560z"/>
        <path d="M960 1680c-397.645 0-720-322.355-720-720s322.355-720 720-720 720 322.355 720 720-322.355 720-720 720m0-1600C473.99 80 80 473.989 80 960c0 486.01 393.99 880 880 880 486.011 0 880-393.99 880-880 0-486.011-393.989-880-880-880"/>
    </g>
</svg>`}
      />
    )
  }
}