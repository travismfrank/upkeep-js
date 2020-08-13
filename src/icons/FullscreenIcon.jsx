import React, { Component } from 'react';
import styled from 'styled-components';

const MediaQuerySVG = styled.svg`
  @media (orientation: portrait) {
    width: ${props => props.size === "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"};
    height: ${props => props.size === "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 12.5) + props.size.match(/[a-zA-Z]/g).join("") : "40px"};
  }
`

const FullscreenIcon = (props) => {
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
        <path fillRule="evenodd" d="M1.464 10.536a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5z"/>
        <path fillRule="evenodd" d="M5.964 10a.5.5 0 0 1 0 .707l-4.146 4.147a.5.5 0 0 1-.707-.708L5.257 10a.5.5 0 0 1 .707 0zm8.854-8.854a.5.5 0 0 1 0 .708L10.672 6a.5.5 0 0 1-.708-.707l4.147-4.147a.5.5 0 0 1 .707 0z"/>
        <path fillRule="evenodd" d="M10.5 1.5A.5.5 0 0 1 11 1h3.5a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-1 0V2h-3a.5.5 0 0 1-.5-.5zm4 9a.5.5 0 0 0-.5.5v3h-3a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5z"/>
        <path fillRule="evenodd" d="M10 9.964a.5.5 0 0 0 0 .708l4.146 4.146a.5.5 0 0 0 .708-.707l-4.147-4.147a.5.5 0 0 0-.707 0zM1.182 1.146a.5.5 0 0 0 0 .708L5.328 6a.5.5 0 0 0 .708-.707L1.889 1.146a.5.5 0 0 0-.707 0z"/>
        <path fillRule="evenodd" d="M5.5 1.5A.5.5 0 0 0 5 1H1.5a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 1 0V2h3a.5.5 0 0 0 .5-.5z"/>
      </MediaQuerySVG>
    </div>
  )
};

export default FullscreenIcon;
