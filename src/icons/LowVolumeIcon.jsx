import React, { Component } from 'react';
import styled from 'styled-components';

const MediaQuerySVG = styled.svg`
  @media (orientation: portrait) {
    width: ${props => props.size === "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"};
    height: ${props => props.size === "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"};
  }
`

const LowVolumeIcon = (props) => {
  return (
    <div className={props.className}>
      <MediaQuerySVG
        width={props.size === "100vw" ? "4vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"}
        height={props.size === "100vw" ? "4vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"}
        size={props.size}
        viewBox="0 0 16 16"
        className=""
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        onClick={props.interact}
        onTouchEnd={props.interact}
      >
        <path fillRule="evenodd" d="M8.717 3.55A.5.5 0 0 1 9 4v8a.5.5 0 0 1-.812.39L5.825 10.5H3.5A.5.5 0 0 1 3 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM8 5.04L6.312 6.39A.5.5 0 0 1 6 6.5H4v3h2a.5.5 0 0 1 .312.11L8 10.96V5.04z"/>
        <path d="M10.707 11.182A4.486 4.486 0 0 0 12.025 8a4.486 4.486 0 0 0-1.318-3.182L10 5.525A3.489 3.489 0 0 1 11.025 8c0 .966-.392 1.841-1.025 2.475l.707.707z"/>
      </MediaQuerySVG>
    </div>
  )
};

export default LowVolumeIcon;
