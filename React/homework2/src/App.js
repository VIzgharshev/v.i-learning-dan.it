import {Component} from "react";
import {Page} from "./Components/Page";
import {Loading} from "./Components/Loading/Loading";


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }
    hideLoadingHandler = () => {
        setTimeout(() => this.setState({loading: false, list: true}), 3000)
    }

    render() {
        return (
            <>
                {this.state.loading && <Loading onLoad={this.hideLoadingHandler()}/>}
                <Page/>
            </>
        )
    }
}