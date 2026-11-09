/* eslint-disable react/prop-types */
import { ASSETS } from "./workstationConfig";

// Static render of the same model. It is the loading placeholder, the mobile
// visual, and the fallback when WebGL is unavailable or fails.
const WorkstationFallback = ({ visible }) => (
  <img
    src={ASSETS.poster}
    alt="Developer workstation with a monitor showing code, a mechanical keyboard and an RGB tower PC"
    width="1078"
    height="840"
    decoding="async"
    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 motion-reduce:transition-none ${
      visible ? "opacity-100" : "opacity-0"
    }`}
  />
);

export default WorkstationFallback;
