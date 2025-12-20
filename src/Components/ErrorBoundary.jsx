import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 flex items-center justify-center px-4">
          <div className="text-center space-y-6 max-w-md">
            <div className="text-7xl mb-4">⚠️</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
              Oops! Something went wrong
            </h1>
            <p className="text-amber-200/70 text-lg">
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
