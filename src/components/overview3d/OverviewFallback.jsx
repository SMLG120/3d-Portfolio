/* eslint-disable react/prop-types */

// Static render of the model: loading state, phone visual and error fallback.
const OverviewFallback = ({ poster, alt, visible }) => (
  <img
    src={poster}
    alt={alt}
    loading="lazy"
    decoding="async"
    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 motion-reduce:transition-none ${
      visible ? "opacity-100" : "opacity-0"
    }`}
  />
);

export default OverviewFallback;
