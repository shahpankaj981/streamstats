import {
  formControlState
} from "./chunk-VJH4M2LI.js";
import {
  useFormControl
} from "./chunk-PXTT4H3M.js";
import {
  Typography_default
} from "./chunk-SB6JDCBD.js";
import {
  capitalize_default,
  init_capitalize
} from "./chunk-S2WA6462.js";
import {
  init_base
} from "./chunk-UZ2WNG5C.js";
import {
  init_styled,
  styled_default
} from "./chunk-RQRXJQVD.js";
import {
  clsx_m_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx_m,
  init_esm,
  init_generateUtilityClass,
  init_useThemeProps,
  refType_default,
  require_jsx_runtime,
  require_prop_types,
  useThemeProps2 as useThemeProps
} from "./chunk-B5CAM7KU.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  init_extends,
  init_objectWithoutPropertiesLoose
} from "./chunk-A4DIZKRK.js";
import {
  require_react
} from "./chunk-YPSDPG2I.js";
import {
  __toESM
} from "./chunk-J43GMYXM.js";

// node_modules/@mui/material/FormControlLabel/FormControlLabel.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx_m();
init_esm();
init_base();
init_capitalize();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js
init_esm();
init_generateUtilityClass();
function getFormControlLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControlLabel", slot);
}
var formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error"]);
var formControlLabelClasses_default = formControlLabelClasses;

// node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "slotProps", "value"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    disabled,
    labelPlacement,
    error
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", `labelPlacement${capitalize_default(labelPlacement)}`, error && "error"],
    label: ["label", disabled && "disabled"]
  };
  return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};
var FormControlLabelRoot = styled_default("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formControlLabelClasses_default.label}`]: styles.label
    }, styles.root, styles[`labelPlacement${capitalize_default(ownerState.labelPlacement)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  [`&.${formControlLabelClasses_default.disabled}`]: {
    cursor: "default"
  }
}, ownerState.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  marginRight: -11
}, ownerState.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, ownerState.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${formControlLabelClasses_default.label}`]: {
    [`&.${formControlLabelClasses_default.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  }
}));
var FormControlLabel = React.forwardRef(function FormControlLabel2(inProps, ref) {
  var _slotProps$typography;
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControlLabel"
  });
  const {
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    label: labelProp,
    labelPlacement = "end",
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const muiFormControl = useFormControl();
  let disabled = disabledProp;
  if (typeof disabled === "undefined" && typeof control.props.disabled !== "undefined") {
    disabled = control.props.disabled;
  }
  if (typeof disabled === "undefined" && muiFormControl) {
    disabled = muiFormControl.disabled;
  }
  const controlProps = {
    disabled
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = _extends({}, props, {
    disabled,
    labelPlacement,
    error: fcs.error
  });
  const classes = useUtilityClasses(ownerState);
  const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
  let label = labelProp;
  if (label != null && label.type !== Typography_default && !disableTypography) {
    label = (0, import_jsx_runtime.jsx)(Typography_default, _extends({
      component: "span"
    }, typographySlotProps, {
      className: clsx_m_default(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
      children: label
    }));
  }
  return (0, import_jsx_runtime2.jsxs)(FormControlLabelRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other, {
    children: [React.cloneElement(control, controlProps), label]
  }));
});
true ? FormControlLabel.propTypes = {
  checked: import_prop_types.default.bool,
  classes: import_prop_types.default.object,
  className: import_prop_types.default.string,
  componentsProps: import_prop_types.default.shape({
    typography: import_prop_types.default.object
  }),
  control: import_prop_types.default.element.isRequired,
  disabled: import_prop_types.default.bool,
  disableTypography: import_prop_types.default.bool,
  inputRef: refType_default,
  label: import_prop_types.default.node,
  labelPlacement: import_prop_types.default.oneOf(["bottom", "end", "start", "top"]),
  name: import_prop_types.default.string,
  onChange: import_prop_types.default.func,
  slotProps: import_prop_types.default.shape({
    typography: import_prop_types.default.object
  }),
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  value: import_prop_types.default.any
} : void 0;
var FormControlLabel_default = FormControlLabel;

export {
  getFormControlLabelUtilityClasses,
  formControlLabelClasses_default,
  FormControlLabel_default
};
//# sourceMappingURL=chunk-DVYXV6BM.js.map
