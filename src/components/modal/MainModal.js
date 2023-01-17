import React from 'react';
import Modal from 'react-modal';
import styled, { keyframes } from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal');

const fade = keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  animation: ${fade} 0.3s ease-in;
`;

const MainModal = (props) => {
  return (
    <Modal isOpen={props.modalOpen} onRequestClose={props.isNotclose} style={customStyles}>
      <Container>{props.children}</Container>
    </Modal>
  );
};

export default MainModal;
