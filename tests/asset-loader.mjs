// Node module hooks: let tests import src/ modules that import images.
// Image imports resolve to their file name, like Vite's asset URLs, and
// directory imports ("../assets") resolve to index.js as Vite does.
import { registerHooks } from "node:module";

const ASSET = /\.(png|jpe?g|svg|webp|gif)$/i;

registerHooks({
  resolve(specifier, context, nextResolve) {
    try {
      return nextResolve(specifier, context);
    } catch (error) {
      if (error.code !== "ERR_UNSUPPORTED_DIR_IMPORT") throw error;
      return nextResolve(`${specifier}/index.js`, context);
    }
  },
  load(url, context, nextLoad) {
    if (ASSET.test(url)) {
      return {
        format: "module",
        source: `export default ${JSON.stringify(url.split("/").pop())};`,
        shortCircuit: true,
      };
    }
    return nextLoad(url, context);
  },
});
