import React, { Component } from 'react';
import styled from 'styled-components';

const MediaQuerySVG = styled.svg`
  @media (orientation: portrait) {
    width: ${props => props.size === "100vw" ? "10vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 5) + props.size.match(/[a-zA-Z]/g).join("") : "100px"};
    height: ${props => props.size === "100vw" ? "10vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 5) + props.size.match(/[a-zA-Z]/g).join("") : "100px"};
  }
`

const PlayIcon = (props) => {
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
        <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
      </MediaQuerySVG>
    </div>
  )
};

export default PlayIcon;
