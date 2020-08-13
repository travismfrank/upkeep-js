import React, { Component } from 'react';
import styled from 'styled-components';

const MediaQuerySVG = styled.svg`
  @media (orientation: portrait) {
    width: ${props => props.size === "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"};
    height: ${props => props.size === "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"};
  }
`

const OffVolumeIcon = (props) => {
  return (
    <div className={props.className}>
      <MediaQuerySVG
        width={props.size === "100vw" ? "4vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 20) + props.size.match(/[a-zA-Z]/g).join("") : "40px"}
        height={props.size === "100vw" ? "4vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 20) + props.size.match(/[a-zA-Z]/g).join("") : "40px"}
        size={props.size}
        viewBox="0 0 16 16"
        className=""
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        onClick={props.interact}
        onTouchEnd={props.interact}
      >
        <path fillRule="evenodd" d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM10 5.04L8.312 6.39A.5.5 0 0 1 8 6.5H6v3h2a.5.5 0 0 1 .312.11L10 10.96V5.04z"/>
      </MediaQuerySVG>
    </div>
  )
};

export default OffVolumeIcon;
