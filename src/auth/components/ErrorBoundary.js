import React from 'react'

class ErrorBoundary extends React.Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({ error: true })
  }

  render() {
    if (this.state.error) {
      // Fallback UI
      return <h1>Yikes, something went wrong!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
