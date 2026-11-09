/* eslint-disable react/prop-types */
import { Component } from "react";

// A model that fails to load renders nothing, and its poster stays visible.
class OverviewErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default OverviewErrorBoundary;
