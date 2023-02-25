import {Component} from "react";
import {Container, Shadow, Circle, Wrapper} from "./Loading.styled";
export class Loading extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Circle/>
                    <Circle/>
                    <Circle/>
                    <Shadow/>
                    <Shadow/>
                    <Shadow/>
                </Wrapper>
            </Container>

        );
    }
}
