import React, { Component } from 'react';
import styled from 'styled-components';

const MediaQuerySVG = styled.svg`
  @media (orientation: portrait) {
    width: ${props => props.size === "100vw" ? "10vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 5) + props.size.match(/[a-zA-Z]/g).join("") : "100px"};
    height: ${props => props.size === "100vw" ? "10vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 5) + props.size.match(/[a-zA-Z]/g).join("") : "100px"};
  }
`

const PauseIcon = (props) => {
  return (
    <div
      className={props.className}
      onTouchEnd={props.bringHudDown}
    >
      <MediaQuerySVG
        width={props.size === "100vw" ? "10vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 5) + props.size.match(/[a-zA-Z]/g).join("") : "100px"}
        height={props.size === "100vw" ? "10vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 5) + props.size.match(/[a-zA-Z]/g).join("") : "100px"}
        size={props.size}
        viewBox="0 0 16 16"
        className=""
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        onClick={props.interact}
        onTouchEnd={props.interact}
        style={{cursor:"pointer"}}
      >
        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
      </MediaQuerySVG>
    </div>
  )
};

export default PauseIcon;
