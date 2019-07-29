import React from "react";
import { SvgIcon } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

const WriteMode = (props: SvgIconProps) => (
  <SvgIcon
    fillRule="evenodd"
    clipRule="evenodd"
    color="secondary"
    fontSize="small"
    {...props}
  >
    <path
      d="M0 0H15V15H0V0ZM2.89474 7.36842C2.89474 10 5 12.1053 7.63158 12.1053C10.2632 12.1053 12.3684 10 12.3684 7.36842C12.3684 4.73684 10.2632 2.63158 7.63158 2.63158C5 2.63158 2.89474 5 2.89474 7.36842Z"
      fill="#231F20"
    />
  </SvgIcon>
);

export default WriteMode;
