import React, { Component } from 'react';
import styled from 'styled-components';

const MediaQuerySVG = styled.svg`
  @media (orientation: portrait) {
    width: ${props => props.size === "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"};
    height: ${props => props.size === "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"};
  }
`

const FullVolumeIcon = (props) => {
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
        <path fillRule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04L4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04z"/>
        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"/>
      </MediaQuerySVG>
    </div>
  )
};

export default FullVolumeIcon;
