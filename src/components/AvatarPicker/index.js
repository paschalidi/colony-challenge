/**
 *
 * AvatarPicker
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/app-store/actions';
import KeyHandler, { KEYDOWN } from 'react-key-handler';
import onClickOutside from 'react-onclickoutside';


class AvatarPicker extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleClickOutside = evt => {
    evt.isTrusted && this.props.closePopover();
  };
  handleAvatarSelection = (data, selectedAvatarId) => {
    if (this.props.isLoading) return false;
    this.props.setIndexOfLoadingAvatar(data, selectedAvatarId);
    this.props.toggleLoading();
    setTimeout(() => {
      this.props.setIndexOfActiveAvatar(data, selectedAvatarId);
      this.props.toggleLoading();
      this.props.togglePopover();
    }, 1000);

  };

  render() {
    const { data, isPopoverOpen, isLoading, indexOfActiveAvatar, indexOfLoadingAvatar, indexOfCandidateAvatar } = this.props;
    return (
      <div className='container'>
        <div className='flex justify-center'>
          <div className='avatar avatar-on-top' onClick={this.props.togglePopover}>
            <img
              src={data[indexOfActiveAvatar].src}
              alt={data[indexOfActiveAvatar].label}
            />
          </div>
        </div>
        <div>
          <div className={`popover ${isPopoverOpen ? 'animation-in' : 'animation-out'}`}>
            <div className='popover-title flex justify-center'>Choose your avatar</div>
            <ul className='container flex row wrap align-start '>
              {
                Object.keys(data).map((index, key) =>
                  <li
                    key={index}
                    onClick={this.handleAvatarSelection.bind(this, data, data[index].id)}
                    onMouseEnter={() => this.props.setIndexOfCandidateAvatar(data, data[index].id)}
                    onMouseLeave={() => this.props.cleanIndexOfCandidateAvatar()}
                    className='avatar-list'
                  >
                    <div
                      className={`
                      avatar
                      ${key === indexOfActiveAvatar && 'avatar-on-list-active' }
                      ${key === indexOfCandidateAvatar && !isLoading && 'avatar-on-list-hovered avatar-on-list-hovered-background' }
                      ${key === indexOfLoadingAvatar && isLoading && 'avatar-on-list-loading' }
                    `}
                    >
                      <img src={data[index].src} alt={data[index].label} />
                    </div>
                  </li>)
              }
            </ul>
          </div>
        </div>

        <KeyHandler
          keyEventName={KEYDOWN}
          keyValue="o"
          onKeyHandle={() => this.props.togglePopover()}
        />
        {
          isPopoverOpen
          &&
          <Fragment>
            <KeyHandler
              keyEventName={KEYDOWN}
              keyValue="ArrowUp"
              onKeyHandle={() => this.props.keypressUp(indexOfCandidateAvatar)}
            />

            <KeyHandler
              keyEventName={KEYDOWN}
              keyValue="ArrowRight"
              onKeyHandle={() => this.props.keypressRight(indexOfCandidateAvatar, Object.assign(data).length)}
            />
            <KeyHandler
              keyEventName={KEYDOWN}
              keyValue="ArrowDown"
              onKeyHandle={() => this.props.keypressDown(indexOfCandidateAvatar, Object.assign(data).length)}
            />
            <KeyHandler
              keyEventName={KEYDOWN}
              keyValue="ArrowLeft"
              onKeyHandle={() => this.props.keypressLeft(indexOfCandidateAvatar)}
            />
          </Fragment>
        }
        {
          indexOfCandidateAvatar !== null
          &&
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="Enter"
            onKeyHandle={this.handleAvatarSelection.bind(this, data, data[indexOfCandidateAvatar].id)}
          />
        }
        {/* language=CSS */}
        <style>
          {`
              .container {
                  width: 310px;
              }

              .absolute {
                  position: absolute;
                  top: 0;
                  left: 0
              }

              ul {
                  -webkit-margin-before: 0;
                  -webkit-margin-after: 0;
                  -webkit-margin-start: 0;
                  -webkit-margin-end: 0;
                  -webkit-padding-start: 0;
              }

              .avatar-list {
                  list-style-type: none;
                  padding: 7px;
              }

              .avatar,
              .avatar img {
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                  position: relative;
              }

              .avatar-on-list-hovered::before {
                  content: '';
                  position: absolute;
                  border: 3px solid rgb(155, 160, 163) !important;
                  border-radius: 50%;
                  top: -3px;
                  bottom: -3px;
                  right: -3px;
                  left: -3px;
                  z-index: 1;
              }

              .avatar-on-list-hovered-background::after {
                  content: '';
                  position: absolute;
                  background: rgb(122, 161, 178);
                  opacity: 0.2;
                  border-radius: 50%;
                  top: 0px;
                  bottom: 0px;
                  right: 0px;
                  left: 0px;
                  z-index: 1;
              }

              .avatar-on-list-active::before {
                  content: '';
                  position: absolute;
                  border: 3px solid rgb(122, 161, 178);
                  border-radius: 50%;
                  top: -3px;
                  bottom: -3px;
                  right: -3px;
                  left: -3px;
                  z-index: 1;
              }

              .avatar-on-list-loading::before {
                  content: '';
                  position: absolute;
                  border: 3px solid rgb(122, 161, 178) !important;
                  border-bottom: 3px solid transparent !important;
                  opacity: 1 !important;
                  border-radius: 50%;
                  top: -3px;
                  bottom: -3px;
                  right: -3px;
                  left: -3px;
                  z-index: 1;
                  -webkit-animation: spin 1s linear infinite; /* Safari */
                  animation: spin 1s linear infinite;
              }

              .avatar-on-top {
                  margin: 1px 0;
              }

              .avatar-on-top:hover::before {
                  content: '';
                  position: absolute;
                  border: 1px solid rgb(155, 160, 163) !important;
                  border-radius: 50%;
                  top: -1px;
                  bottom: -1px;
                  right: -1px;
                  left: -1px;
                  z-index: 1;
              }

              .popover {
                  border-radius: 2px;
                  background: rgb(44, 48, 51);
                  box-shadow: 2px 2px 10px 2px rgb(102, 102, 102);
                  padding: 7px 7px;
                  height: auto;
                  margin-top: 10px;
              }

              .popover::after {
                  border-bottom: 8px solid rgb(44, 48, 51);
                  border-left: 8px solid transparent;
                  border-right: 8px solid transparent;
                  width: 0;
                  height: 0;

                  content: "";
                  display: block;
                  position: absolute;
                  bottom: 100%;
                  left: calc(50% - 8px);
              }

              .popover-title {
                  font-family: 'Source Sans Pro', sans-serif;
                  color: rgb(249, 249, 249);
                  font-size: 16px;
                  margin: 10px 0;

              }

              .animation-in {
                  opacity: 0;
                  animation-name: animationIn;
                  animation-duration: 200ms;
                  animation-timing-function: linear;
                  animation-fill-mode: forwards;
              }

              .animation-out {
                  opacity: 0;
                  animation-name: animationOut;
                  animation-duration: 100ms;
                  animation-timing-function: linear;
                  animation-fill-mode: forwards;
              }

              @keyframes animationIn {
                  0% {
                      opacity: 0;
                      transform: scale(0.3) translate3d(0, 0, 0);
                  }
                  50% {
                      opacity: 0.9;
                      transform: scale(1.02);
                  }
                  95% {
                      opacity: 1;
                      transform: scale(0.95);
                  }
                  100% {
                      opacity: 1;
                      transform: scale(1) translate3d(0, 0, 0);
                  }
              }

              @keyframes animationOut {
                  0% {
                      opacity: 1;
                      transform: scale(1) translate3d(0, 0, 0);

                  }
                  100% {
                      opacity: 0;
                      transform: scale(0) translate3d(0, 0, 0);

                  }
              }

              /* Safari */
              @-webkit-keyframes spin {
                  0% {
                      -webkit-transform: rotate(0deg);
                  }
                  100% {
                      -webkit-transform: rotate(360deg);
                  }
              }

              @keyframes spin {
                  0% {
                      transform: rotate(0deg);
                  }
                  100% {
                      transform: rotate(360deg);
                  }
              }
          `}
        </style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    ...state.reducer
  };
}

export default connect(mapStateToProps, actions)(onClickOutside(AvatarPicker));