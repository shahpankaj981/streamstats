import {
  capitalize_default,
  init_capitalize
} from "./chunk-ABCXYQ6P.js";
import {
  init_styled,
  styled_default
} from "./chunk-3A3E7JQD.js";
import {
  createContainer,
  generateUtilityClass,
  generateUtilityClasses,
  init_esm,
  init_esm2,
  init_generateUtilityClass,
  init_useThemeProps,
  require_prop_types,
  useThemeProps2 as useThemeProps
} from "./chunk-T24RT3PQ.js";
import {
  __toESM
} from "./chunk-J43GMYXM.js";

// node_modules/@mui/material/Container/Container.js
var import_prop_types = __toESM(require_prop_types());
init_esm2();
init_capitalize();
init_styled();
init_useThemeProps();
var Container = createContainer({
  createStyledComponent: styled_default("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[`maxWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
    }
  }),
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "MuiContainer"
  })
});
true ? Container.propTypes = {
  children: import_prop_types.default.node,
  classes: import_prop_types.default.object,
  component: import_prop_types.default.elementType,
  disableGutters: import_prop_types.default.bool,
  fixed: import_prop_types.default.bool,
  maxWidth: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types.default.string]),
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Container_default = Container;

// node_modules/@mui/material/Container/containerClasses.js
init_esm();
init_generateUtilityClass();
function getContainerUtilityClass(slot) {
  return generateUtilityClass("MuiContainer", slot);
}
var containerClasses = generateUtilityClasses("MuiContainer", ["root", "disableGutters", "fixed", "maxWidthXs", "maxWidthSm", "maxWidthMd", "maxWidthLg", "maxWidthXl"]);
var containerClasses_default = containerClasses;

export {
  Container_default,
  getContainerUtilityClass,
  containerClasses_default
};
//# sourceMappingURL=chunk-2D5QFAXE.js.map
