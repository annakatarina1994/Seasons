import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {latitude: null, errorMessage: ""};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({latitude: position.coords.latitude});
            }, 
            (error) => {
                this.setState({errorMessage: error.message})
            }
        );
    }

    // Always have to define render!
    render() {
        return ( 
        <div>
            Latitude: {this.state.latitude}<br />
            Error: {this.state.errorMessage}
        </div>
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root'))