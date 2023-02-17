import React, {Component} from "react";
import styled from "styled-components";
import {Button} from "./Button";

const ModalWrapper = styled.div`
  display: ${props => props.visible || 'flex'};
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
`

const ModalBody = styled.div`
  max-width: 600px;
  height: fit-content;
  border-radius: 10px;
  margin: 50px;
  background-color: ${props => props.modalColor};
  display: flex;
  flex-direction: column;
`

const ModalHeader = styled.h1`
  width: 100%;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  font-size: 22px;
  color: #ffffff;
  position: relative;
  background-color: ${props => props.headerColor};
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 10px;
  }
  img {
    cursor: pointer;
  }
`

const ModalContent = styled.p`
  margin: 25px 30px 25px 30px;
  padding: 0 20px 0 20px;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  line-height: 26px;
`

const ModalBtnWrapper = styled.div`
  margin: auto;
`

export class Modal extends Component {

    hideModal = () => {
        this.props.onHideModal()
    }

    render() {
        return (
            <ModalWrapper show={this.props.state} onClick={this.hideModal}>
                <ModalBody {...this.props} onClick={(e) => e.stopPropagation()}>
                    <ModalHeader {...this.props}>
                        <p>{this.props.header}</p>
                        <img
                            width="34"
                            height="34"
                            src="https://lcdn-eu.icons8.com/c/cTYfs4sfwkKobVQg2n9KGw/edd8ae392b047266828698dd38e8753e1a24313b.png"
                            onClick={this.props.onHideModal}
                        />
                    </ModalHeader>
                    <ModalContent>{this.props.text}</ModalContent>
                    <ModalBtnWrapper>
                        <Button bgcolor={this.props.bgcolor} text='Ok' onClick={this.props.onHideModal}/>
                        <Button bgcolor={this.props.bgcolor} text='Cansel' onClick={this.props.onHideModal}/>
                    </ModalBtnWrapper>
                </ModalBody>
            </ModalWrapper>
        );
    }
};


