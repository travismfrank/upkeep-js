import React, { Component } from 'react';
import styled from 'styled-components';

const MediaQuerySVG = styled.svg`
  @media (orientation: portrait) {
    width: ${props => props.size === "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"};
    height: ${props => props.size === "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"};
  }
`

const MuteVolumeIcon = (props) => {
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
        <path fillRule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04L4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0z"/>
        <path fillRule="evenodd" d="M9.146 5.646a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0z"/>
      </MediaQuerySVG>
    </div>
  )
};

export default MuteVolumeIcon;
