import React from "react";
import { SvgIcon } from "@material-ui/core";

export default function createSvgIcon(path, displayName) {
  const Component = React.memo(
    React.forwardRef((props, ref) => (
      <SvgIcon {...props} data-mui-test={`${displayName}Icon`} ref={ref}>
        {path}
      </SvgIcon>
    ))
  );

  Component.muiName = SvgIcon.muiName;

  return Component;
}
