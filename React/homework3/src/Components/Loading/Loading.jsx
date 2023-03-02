import {Container, Shadow, Circle, Wrapper} from "./Loading.styled.jsx";

export default function Loading() {
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
