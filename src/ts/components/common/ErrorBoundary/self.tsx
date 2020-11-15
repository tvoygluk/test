import React from 'react';

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  static getDerivedStateFromError(err: Error): IErrorBoundaryState {
    return { error: err };
  }

  state: IErrorBoundaryState = {
    error: null,
  };

  render(): React.ReactNode {
    if (this.state.error) {
      return <p>Something went wrong in React app:(</p>;
    }
    return this.props.children;
  }
}
