/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { Component } from "react";

// Keeps a 3D failure (no WebGL, a model that won't load) from unmounting the
// whole page. The failed scene renders nothing, or `fallback` if given.
class WebGLBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback ?? null : this.props.children;
  }
}

export const withWebGLBoundary = (Scene) =>
  function SafeScene(props) {
    return (
      <WebGLBoundary>
        <Scene {...props} />
      </WebGLBoundary>
    );
  };

export default WebGLBoundary;
