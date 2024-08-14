import React from 'react';

class ErrorProneComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { triggerError: false };
    }

    handleClick = () => {
        this.setState({ triggerError: true });
    }

    render() {
        if (this.state.triggerError) {
            throw new Error('An intentional error!');
        }

        return (
            <div>
                <h2>Error Prone Component</h2>
                <button onClick={this.handleClick}>Trigger Error</button>
            </div>
        );
    }
}

export default ErrorProneComponent;
