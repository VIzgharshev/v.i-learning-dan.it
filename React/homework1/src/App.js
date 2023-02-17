import {Component} from "react";
import {Button} from "./Components/Button";
import {Modal} from "./Components/Modal";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export class App extends Component {
    constructor(props) {
        super(props);
        this.testArray = [
            {
                header: 'Do you want to delete this file?',
                text: 'Once you delete this file, it won’t be possible to undo this action. \n' +
                    'Are you sure you want to delete it?'
            },
            {
                header: 'Do you want add this file?',
                text: 'Once you add this file, you can find it in your file-list. \n' +
                    'Are you sure you want to add it?'
            }

        ]
    }

    state = {
        showModal: false,
        showModal2: false,
    }

    modalCloseHandler = () => this.setState({showModal: false});
    modalShowHandler = () => this.setState({showModal: true});
    modalCloseHandler2 = () => this.setState({showModal2: false});
    modalShowHandler2 = () => this.setState({showModal2: true});

    render() {
        return (
            <div>
                {this.state.showModal && <Modal {...this.testArray[0]}
                                                modalColor='#e54b3c'
                                                headerColor='#c73a2e'
                                                bgcolor='#b2382c'
                                                onHideModal={this.modalCloseHandler}
                />}
                {this.state.showModal2 && <Modal {...this.testArray[1]}
                                                 modalColor='#3c99e5'
                                                 headerColor='#2f86c9'
                                                 bgcolor='#256ca4'
                                                 onHideModal={this.modalCloseHandler2}
                />}

                <ButtonWrapper>
                    <Button bgcolor='#e54b3c' text='Delete' onClick={this.modalShowHandler}/>
                    <Button bgcolor='#3c99e5' text='Add' onClick={this.modalShowHandler2}/>
                </ButtonWrapper>
            </div>

        )
    }
}