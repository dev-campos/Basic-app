import React, {Component} from 'react';

// TODO: Change to use Hooks when new hook is created.
class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
    }

    return this.props.children;

  }
}

export default ErrorBoundary;
