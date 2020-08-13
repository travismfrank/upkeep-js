import React, { Component } from 'react';
import styled from 'styled-components';

const TimeReadout = styled.p`
  font-family: sans-serif;
  display: inline-block;
  font-size: ${props => props.size === "100vw" ? "2.5vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 20) + props.size.match(/[a-zA-Z]/g).join("") : "25px"};
  margin: 0;

  @media (orientation: portrait) {
    font-size: ${props => props.size === "100vw" ? "2.5vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 20) + props.size.match(/[a-zA-Z]/g).join("") : "25px"};
  }
`

const ScrubLine = styled.input`
  -webkit-appearance: none;
  display: inline-block;
  width: 98%;
  padding-left: 1%;
  padding-right: 1%;
  background: transparent;
  touch-action: none;

  :focus {
    outline: none;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${props => props.size === "100vw" ? "2vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
    width: ${props => props.size === "100vw" ? "2vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
    background: #ff8aad;
    cursor: pointer;
    border-radius: ${props => props.size === "100vw" ? "1vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "10px"};
    margin-top: ${props => props.size === "100vw" ? "-1vw" : props.size ? "-" + String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "-10px"};

    @media (orientation: portrait) {
      height: ${props => props.size === "100vw" ? "2vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
      width: ${props => props.size === "100vw" ? "2vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
      border-radius: ${props => props.size === "100vw" ? "1vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "10px"};
      margin-top: ${props => props.size === "100vw" ? "-1vh" : props.size ? "-" + String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "-10px"};
    }
  }

  ::-moz-range-thumb {
    height: ${props => props.size === "100vw" ? "2vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
    width: ${props => props.size === "100vw" ? "2vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
    background: #ff8aad;
    cursor: pointer;
    border-radius: ${props => props.size === "100vw" ? "1vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "10px"};

    @media (orientation: portrait) {
      height: ${props => props.size === "100vw" ? "2vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
      width: ${props => props.size === "100vw" ? "2vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
      border-radius: ${props => props.size === "100vw" ? "1vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "10px"};
    }
  }

  ::-ms-thumb {
    height: ${props => props.size === "100vw" ? "2vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
    width: ${props => props.size === "100vw" ? "2vw" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
    background: #ff8aad;
    cursor: pointer;
    border-radius: ${props => props.size === "100vw" ? "1vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "10px"};

    @media (orientation: portrait) {
      height: ${props => props.size === "100vw" ? "2vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
      width: ${props => props.size === "100vw" ? "2vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 25) + props.size.match(/[a-zA-Z]/g).join("") : "20px"};
      border-radius: ${props => props.size === "100vw" ? "1vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "10px"};
    }
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: white;
  }

  ::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: white;
  }

  ::-ms-track {
    width: 100%;
    cursor: pointer;
    height: 1px;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-ms-fill-lower {
    background: #ff8aad;
  }

  ::-ms-fill-upper {
    background: white;
  }
`



class Scrubber extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={this.props.className}>
        <TimeReadout
          size={this.props.size}
          style={{paddingLeft:"2%"}}
        >
          {this.props.currentTime}
        </TimeReadout>
        <ScrubLine
          size={this.props.size}
          type="range"
          onChange={this.props.manualSeek}
          value={this.props.currentTimeInSeconds}
          min="0"
          max={this.props.durationInSeconds}
          step="any"
        />
        <TimeReadout
          size={this.props.size}
          style={{paddingRight:"2%"}}
        >
          {this.props.duration}
        </TimeReadout>
      </div>
    );
  }
}

export default Scrubber;
