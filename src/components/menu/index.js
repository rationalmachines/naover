import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

import Box from '../../layouts/box';
import Chart from '../Chart';
import filterByCamera from '../../actions/roverActions';

const rotateOn = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(45deg);
  }
`;

const rotateOut = keyframes`
from {
    transform: rotate(45deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const slideIn = keyframes`
from {
  transform: translateX(50vw);
  }

  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
from {
  transform: translateX(0);
  }

  to {
    transform: translateX(50vw);
  }
`;

const IconWrapper = styled.div`
  position: fixed;
  right: 74px;
  bottom: 52px;
  width: 60px;
  height: 60px;
  z-index: 10;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #4b6464;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  animation: ${props => (props.roll ? rotateOn : rotateOut)} 1s ease-in-out;
  animation-fill-mode: forwards;
  .fas {
    color: #4b6464;
    font-size: 32px;
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  width: 50vw;
  height: 100vh;
  z-index: 8;
  text-decoration: none;
  cursor: pointer;
  background-color: #ffffff;
  align-items: center;
  display: flex;
  visibility: ${props => (props.roll ? 'visible' : 'hidden')};
  transition: visibility 500ms linear;
  animation: ${props => (props.roll ? slideIn : slideOut)} 500ms linear;
  animation-fill-mode: forwards;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-flow: row wrap;
`;

class Menu extends Component {
  static propTypes = {};

  state = {
    active: false,
  };

  onSelect = () => {
    const { filterCamera } = this.props;
    filterCamera();
  };

  onActive = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const { active } = this.state;
    const { cameras, days } = this.props;

    return (
      <React.Fragment>
        <IconWrapper onClick={this.onActive} roll={active}>
          <i className="fas fa-plus" />
        </IconWrapper>
        <MenuWrapper roll={active}>
          <Box title="Rover Analytics" subtitle={Date.now()}>
            <Chart cam={cameras} sol={days} />
          </Box>
        </MenuWrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cameras: state.rover.cameras,
  days: state.rover.days,
});

export default connect(
  mapStateToProps,
  { filterCamera: filterByCamera },
)(Menu);
