import './App.css';
import { Component } from 'react';

// a stateless component - doesn't have any state updates or anything, static and only uses props, passed pops are immutable once assigned
class StatelessDemo extends Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}

// a stateful component - has the ability to change states
class StatefulDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Default Message'
        };
    }

    updateMessage = () => {
        this.setState({ message: 'Update Success' }); // change state
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* updates state upon click */}
                <button onClick={this.updateMessage}>
                    try to update state
                </button>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <StatelessDemo value="StatelessDemo (Parent)" />
            <StatefulDemo />
        </div>
    );
}

export default App;