import React from 'react'
import ErrorOnLoad from './ErrorOnLoad'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (_error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return (
        <div className={this.props.className}>
          <ErrorOnLoad />
        </div>
      )
    }

    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export default ErrorBoundary
