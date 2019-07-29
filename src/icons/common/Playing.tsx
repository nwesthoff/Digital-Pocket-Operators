import React from "react";
import { SvgIcon } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

const Playing = (props: SvgIconProps) => (
  <SvgIcon
    fillRule="evenodd"
    clipRule="evenodd"
    color="secondary"
    fontSize="small"
    {...props}
  >
    <path d="M0 16V0L13 8L0 16Z" fill="black" />
  </SvgIcon>
);

export default Playing;
