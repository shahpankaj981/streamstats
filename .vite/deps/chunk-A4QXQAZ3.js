import {
  GlobalStyles_default
} from "./chunk-STTWDPT6.js";
import {
  init_useThemeProps,
  require_jsx_runtime,
  require_prop_types,
  useThemeProps2 as useThemeProps
} from "./chunk-B5CAM7KU.js";
import {
  _extends,
  init_extends
} from "./chunk-A4DIZKRK.js";
import {
  require_react
} from "./chunk-YPSDPG2I.js";
import {
  __toESM
} from "./chunk-J43GMYXM.js";

// node_modules/@mui/material/CssBaseline/CssBaseline.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_useThemeProps();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var html = (theme, enableColorScheme) => _extends({
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  boxSizing: "border-box",
  WebkitTextSizeAdjust: "100%"
}, enableColorScheme && !theme.vars && {
  colorScheme: theme.palette.mode
});
var body = (theme) => _extends({
  color: (theme.vars || theme).palette.text.primary
}, theme.typography.body1, {
  backgroundColor: (theme.vars || theme).palette.background.default,
  "@media print": {
    backgroundColor: (theme.vars || theme).palette.common.white
  }
});
var styles = (theme, enableColorScheme = false) => {
  var _theme$components, _theme$components$Mui;
  const colorSchemeStyles = {};
  if (enableColorScheme && theme.colorSchemes) {
    Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
      var _scheme$palette;
      colorSchemeStyles[theme.getColorSchemeSelector(key).replace(/\s*&/, "")] = {
        colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
      };
    });
  }
  let defaultStyles = _extends({
    html: html(theme, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme.typography.fontWeightBold
    },
    body: _extends({
      margin: 0
    }, body(theme), {
      "&::backdrop": {
        backgroundColor: (theme.vars || theme).palette.background.default
      }
    })
  }, colorSchemeStyles);
  const themeOverrides = (_theme$components = theme.components) == null ? void 0 : (_theme$components$Mui = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components$Mui.styleOverrides;
  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }
  return defaultStyles;
};
function CssBaseline(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCssBaseline"
  });
  const {
    children,
    enableColorScheme = false
  } = props;
  return (0, import_jsx_runtime2.jsxs)(React.Fragment, {
    children: [(0, import_jsx_runtime.jsx)(GlobalStyles_default, {
      styles: (theme) => styles(theme, enableColorScheme)
    }), children]
  });
}
true ? CssBaseline.propTypes = {
  children: import_prop_types.default.node,
  enableColorScheme: import_prop_types.default.bool
} : void 0;
var CssBaseline_default = CssBaseline;

export {
  html,
  body,
  CssBaseline_default
};
//# sourceMappingURL=chunk-A4QXQAZ3.js.map
