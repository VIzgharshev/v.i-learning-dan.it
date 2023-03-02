import {PageWrapper} from "../Main/Main.styled.jsx";
import map from '../../assets/img/map.png'
import {InfoWrapper, MapWrapper} from "./Contacts.styled.jsx";


export default function Contacts(props) {


    return (
        <>
            <PageWrapper>
                <InfoWrapper>
                    <h3>phone:</h3>
                    <p>+38-093-123-45-67</p>
                    <h3>email: </h3>
                    <p>some.apple@gmail.com</p>
                    <h3>address: </h3>
                    <p>Ukraine, Kyiv, st.Khreshchatyk 1</p>
                </InfoWrapper>
                <MapWrapper>
                    <h3>Our location:</h3>
                    <img src={map} alt="map"/>
                </MapWrapper>
            </PageWrapper>
        </>
    )
}