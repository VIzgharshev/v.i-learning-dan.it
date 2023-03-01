import {Container, Shadow, Circle, Wrapper} from "./Loading.styled";

export const Loading = () => {
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
