import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import some components
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';
import FullVolumeIcon from './icons/FullVolumeIcon';
import MuteVolumeIcon from './icons/MuteVolumeIcon';
import FullscreenIcon from './icons/FullscreenIcon';
import ExitFullscreenIcon from './icons/ExitFullscreenIcon';
import Scrubber from './Scrubber';

// Create styled components that make up main component

// Big Divs
const OuterDiv = styled.div`
  width: ${props => props.width ? props.width : '500px'};
  position: relative;
  height: auto;
  display: flex;
`

const InvisibleDiv = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2147483647;
`

const ShadedDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background-color: black;
  opacity: 0.3;
`

// Video Component
const PureVideo = styled.video`
  z-index: 1;
  width: 100%;
  height: auto;
  border-radius: 1%;

  ::-webkit-media-controls {
    display: none !important;
  }
`

// Play & Pause Icons
const BigPlayIcon = styled(PlayIcon)`
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BigPauseIcon = styled(PauseIcon)`
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Volume Icons
const CornerFullVolumeIcon = styled(FullVolumeIcon)`
  z-index: 1001;
  position: absolute;
  padding-left: ${props => props.size == "100vw" ? "4.5vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "10px"};
  padding-top: ${props => props.size == "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 62.5) + props.size.match(/[a-zA-Z]/g).join("") : "8px"};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  touch-action: none;
  cursor: pointer;
`

const CornerMuteVolumeIcon = styled(MuteVolumeIcon)`
  z-index: 1001;
  position: absolute;
  padding-left: ${props => props.size == "100vw" ? "4.5vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "10px"};
  padding-top: ${props => props.size == "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 62.5) + props.size.match(/[a-zA-Z]/g).join("") : "8px"};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  touch-action: none;
  cursor: pointer;
`

// Fullscreen Icons
const CornerFullscreenIcon = styled(FullscreenIcon)`
  z-index: 1001;
  position: absolute;
  right: 0;
  padding-right: ${props => props.size == "100vw" ? "4.5vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "10px"};;
  padding-top: ${props => props.size == "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 62.5) + props.size.match(/[a-zA-Z]/g).join("") : "8px"};;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  touch-action: none;
  cursor: pointer;
`

const CornerExitFullscreenIcon = styled(ExitFullscreenIcon)`
  z-index: 1001;
  position: absolute;
  right: 0;
  padding-right: ${props => props.size == "100vw" ? "4.5vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 50) + props.size.match(/[a-zA-Z]/g).join("") : "10px"};;
  padding-top: ${props => props.size == "100vw" ? "4vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 62.5) + props.size.match(/[a-zA-Z]/g).join("") : "8px"};;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  touch-action: none;
  cursor: pointer;
`

// Scrubber
const SizedScrubber = styled(Scrubber)`
  z-index: 1001;
  position: absolute;
  bottom: 0;
  padding-bottom: ${props => props.size == "100vw" ? "1vh" : props.size ? String(props.size.match(/[0-9]/g).join("") / 100) + props.size.match(/[a-zA-Z]/g).join("") : "5px"};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
`

// Create UpkeepVideo component
class UpkeepVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width ? this.props.width : '800px',
      initial: true,
      currentTime: '00:00',
    };

    // Refs for video controls & fullscreen
    this.video = React.createRef();
    this.outerDiv = React.createRef();

    // Bind all of our functionality
    this.firstPlay = this.firstPlay.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.checkAndBringHudDown = this.checkAndBringHudDown.bind(this);
    this.bringHudUp = this.bringHudUp.bind(this);
    this.bringHudDown = this.bringHudDown.bind(this);
    this.mute = this.mute.bind(this);
    this.unmute = this.unmute.bind(this);
    this.enterFullscreen = this.enterFullscreen.bind(this);
    this.exitFullscreen = this.exitFullscreen.bind(this);
    this.escFullscreen = this.escFullscreen.bind(this);
    this.createHumanTime = this.createHumanTime.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.manualSeek = this.manualSeek.bind(this);
  }

  // Lines up escape key with fullscreen functionality
  componentDidMount() {
    document.addEventListener("fullscreenchange", this.escFullscreen, false);
    document.addEventListener("webkitfullscreenchange", this.escFullscreen, false);
    document.addEventListener("mozfullscreenchange", this.escFullscreen, false);
    document.addEventListener("MSfullscreenchange", this.escFullscreen, false);
  }

  componentWillUnmount() {
    document.removeEventListener("fullscreenchange", this.escFullscreen, false);
    document.removeEventListener("webkitfullscreenchange", this.escFullscreen, false);
    document.removeEventListener("mozfullscreenchange", this.escFullscreen, false);
    document.removeEventListener("MSfullscreenchange", this.escFullscreen, false);
  }

  // Functionality for the first play
  firstPlay(event) {
    event.preventDefault();
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.initial = false;
      newState.paused = false;
      newState.hudUp = false;
      return newState;
    });
    this.video.current.play();
  }

  pause(event) {
    event.stopPropagation();
    event.preventDefault();
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.paused = true;
      newState.checking = false;
      return newState;
    });
    this.video.current.pause();
  }

  play(event) {
    event.stopPropagation();
    event.preventDefault();
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.paused = false;
      return newState;
    });
    this.video.current.play();
    this.checkAndBringHudDown();
  }

  // Hud functionality
  checkAndBringHudDown() {
    // Keep track of these calls
    if (!this.state.checking) {
      this.setState(state => {
        const newState = Object.assign({}, state);
        newState.checking = true;
        return newState;
      });
    }
    // Automatically brings hud down if still playing
    setTimeout(
      () => {
        if (this.state.hudUp && !this.state.paused && !this.state.leaveHudUp) {
          this.setState(state => {
            const newState = Object.assign({}, state);
            newState.hudUp = false;
            newState.checking = false;
            return newState;
          });
        } else if (this.state.hudUp && !this.state.paused) {
          this.setState(state => {
            const newState = Object.assign({}, state);
            newState.leaveHudUp = false;
            return newState;
          });
          this.checkAndBringHudDown();
        } else if (!this.state.hudUp) {
          this.setState(state => {
            const newState = Object.assign({}, state);
            newState.checking = false;
            newState.leaveHudUp = false;
            return newState;
          });
        }
      }, 2000
    )
  }

  bringHudUp(event) {
    event.preventDefault();
    if (!this.state.checking) this.checkAndBringHudDown();
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.hudUp = true;
      newState.leaveHudUp = true;
      return newState;
    });
  }

  bringHudDown(event) {
    event.preventDefault();
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.hudUp = false;
      newState.leaveHudUp = false;
      return newState;
    });
  }

  // Volume
  mute(event) {
    event.stopPropagation();
    event.preventDefault();
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.muted = true;
      newState.leaveHudUp = true;
      return newState;
    });
    this.video.current.muted = true;
  }

  unmute(event) {
    event.stopPropagation();
    event.preventDefault();
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.muted = false;
      newState.leaveHudUp = true;
      return newState;
    });
    this.video.current.muted = false;
  }

  // Fullscreen functionality
  enterFullscreen() {
    this.outerDiv.current.requestFullscreen();
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.fullscreen = true;
      newState.width = "100vw";
      return newState;
    });
  }

  exitFullscreen() {
    document.exitFullscreen();
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.fullscreen = false;
      newState.width = this.props.width ? this.props.width : "500px";
      return newState;
    });
  }

  escFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement) {
      document.exitFullscreen();
      this.setState(state => {
        const newState = Object.assign({}, state);
        newState.fullscreen = false;
        newState.width = this.props.width ? this.props.width : "500px";
        return newState;
      });
    }
  }

  // Scrubber functionality

  // Turns seconds into human-readable 00:00 format
  createHumanTime(time) {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);
    return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`
  }

  // Sets duration once the video loads
  setDuration() {
    const humanTime = this.createHumanTime(this.video.current.duration);
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.duration = humanTime;
      return newState;
    });
  }

  // Fired as video updates
  updateTime() {
    const humanTime = this.createHumanTime(this.video.current.currentTime);
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.currentTime = humanTime;
      return newState;
    });
  }

  // Resets state to initial
  handleEnd() {
    this.setState(state => {
      return {
        initial: true,
        currentTime: '00:00',
        duration: state.duration,
        hudUp: undefined,
        muted: undefined,
        paused: undefined,
      };
    });
    this.video.current.currentTime = 0;
  }

  // Handles seeking with slider
  manualSeek(e) {
    this.video.current.currentTime = e.target.value;
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.leaveHudUp = true;
      return newState;
    });
  }

  render() {
    return(
      <OuterDiv
        width={this.state.width}
        ref={this.outerDiv}
      >
        {/*Creates touch area for bringing hud up*/}
        {this.state.hudUp === false && <InvisibleDiv
          onMouseEnter={this.bringHudUp}
          onMouseMove={this.bringHudUp}
          onTouchEnd={this.bringHudUp}
        />}
        {/*Creates initial play icon*/}
        {this.state.initial && <BigPlayIcon
          size={this.state.width}
          interact={this.firstPlay}
        />}
        {this.state.initial && <ShadedDiv />}
        {this.state.hudUp && <ShadedDiv />}
        {/*Creates pause & play icons when hud is up*/}
        {this.state.hudUp && !this.state.paused && <BigPauseIcon
          size={this.state.width}
          interact={this.pause}
          bringHudDown={this.bringHudDown}
        />}
        {this.state.hudUp && this.state.paused && <BigPlayIcon
          size={this.state.width}
          interact={this.play}
          bringHudDown={this.bringHudDown}
        />}
        {/*Creates volume icons when hud is up*/}
        {this.state.hudUp && !this.state.muted && <CornerFullVolumeIcon
          size={this.state.width}
          interact={this.mute}
        />}
        {this.state.hudUp && this.state.muted && <CornerMuteVolumeIcon
          size={this.state.width}
          interact={this.unmute}
        />}
        {/*Creates fullscreen icons when hud is up*/}
        {this.state.hudUp && !this.state.fullscreen && <CornerFullscreenIcon
          size={this.state.width}
          interact={this.enterFullscreen}
        />}
        {this.state.hudUp && this.state.fullscreen && <CornerExitFullscreenIcon
          size={this.state.width}
          interact={this.exitFullscreen}
        />}
        {/*Creates scrubber when hud is up*/}
        {this.state.hudUp && <SizedScrubber
          size={this.state.width}
          currentTime={this.state.currentTime}
          currentTimeInSeconds={this.video.current.currentTime}
          duration={this.state.duration}
          durationInSeconds={this.video.current.duration}
          manualSeek={this.manualSeek}
        />}
        {/*Video*/}
        <PureVideo
          src={this.props.src}
          controls={false}
          ref={this.video}
          onDurationChange={this.setDuration}
          onTimeUpdate={this.updateTime}
          onEnded={this.handleEnd}
        />
      </OuterDiv>
    )
  }
}

// Make sure proptypes are declared
UpkeepVideo.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string
};

export default UpkeepVideo;
