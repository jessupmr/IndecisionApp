import React from 'react';
import Modal from 'react-modal';
import Options from './Options';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}        
        onRequestClose={props.handleClearSelectedOption}
        className="modal"
        closeTimeoutMS={200}
        contentLabel="Selected Option"        
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="modal__button" onClick={props.handleClearSelectedOption}>Got it!</button>
    </Modal>
);

export default OptionModal