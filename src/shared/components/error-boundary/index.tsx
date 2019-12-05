import React from 'react';
import Alert from "../alert";

class ErrorBoundary extends React.PureComponent<any, any> {
    state = {error: null};

    static getDerivedStateFromError(error: any) {
        return {error};
    }

    tryAgain = () => this.setState({error: null});

    render() {

        return this.state.error ? (
// @ts-ignore
            <Alert text={this.state.error.message}>
                <button className="btn bg-red-500 hover:bg-red-400 text-white rounded" onClick={this.tryAgain}>
                    try again
                </button>
            </Alert>
        ) : (
            this.props.children
        );
    }

}

export default ErrorBoundary;
