import {
  GlobalStyles,
  _extends,
  defaultTheme_default,
  init_defaultTheme,
  init_esm2 as init_esm,
  init_extends,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-T24RT3PQ.js";
import {
  require_react
} from "./chunk-YPSDPG2I.js";
import {
  __toESM
} from "./chunk-J43GMYXM.js";

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_esm();
init_defaultTheme();
var import_jsx_runtime = __toESM(require_jsx_runtime());
function GlobalStyles2(props) {
  return (0, import_jsx_runtime.jsx)(GlobalStyles, _extends({}, props, {
    defaultTheme: defaultTheme_default
  }));
}
true ? GlobalStyles2.propTypes = {
  styles: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.shape({
    __emotion_styles: import_prop_types.default.any.isRequired
  }), import_prop_types.default.string, import_prop_types.default.bool])
} : void 0;
var GlobalStyles_default = GlobalStyles2;

export {
  GlobalStyles_default
};
//# sourceMappingURL=chunk-PYMT7SJF.js.map
