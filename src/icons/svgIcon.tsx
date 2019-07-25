import React from "react";
import clsx from "clsx";
import { capitalize } from "@material-ui/core/utils";
import { withStyles } from "@material-ui/styles";

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    fontSize: theme.typography.pxToRem(24),
    transition: theme.transitions.create("fill", {
      duration: theme.transitions.duration.shorter
    })
  },
  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main
  },
  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main
  },
  /* Styles applied to the root element if `color="action"`. */
  colorAction: {
    color: theme.palette.action.active
  },
  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    color: theme.palette.error.main
  },
  /* Styles applied to the root element if `color="disabled"`. */
  colorDisabled: {
    color: theme.palette.action.disabled
  },
  /* Styles applied to the root element if `fontSize="inherit"`. */
  fontSizeInherit: {
    fontSize: "inherit"
  },
  /* Styles applied to the root element if `fontSize="small"`. */
  fontSizeSmall: {
    fontSize: theme.typography.pxToRem(20)
  },
  /* Styles applied to the root element if `fontSize="large"`. */
  fontSizeLarge: {
    fontSize: theme.typography.pxToRem(35)
  }
});

const SvgIcon = React.forwardRef(function SvgIcon(props, ref) {
  const {
    children,
    classes,
    className,
    color = "inherit",
    component: Component = "svg",
    fontSize = "default",
    htmlColor,
    titleAccess,
    viewBox = "0 0 24 24",
    ...other
  } = props;

  return (
    <Component
      className={clsx(
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== "inherit",
          [classes[`fontSize${capitalize(fontSize)}`]]: fontSize !== "default"
        },
        className
      )}
      focusable="false"
      viewBox={viewBox}
      color={htmlColor}
      aria-hidden={titleAccess ? "false" : "true"}
      role={titleAccess ? "img" : "presentation"}
      ref={ref}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
});

SvgIcon.muiName = "SvgIcon";

export default withStyles(styles, { name: "MuiSvgIcon" })(SvgIcon);
