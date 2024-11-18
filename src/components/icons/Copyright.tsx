import React from "react";
import Copyright from "@assets/copyright.svg";

interface CopyrightIconProps {
  iconClassName?: string;
}

const CopyrightIcon: React.FC<CopyrightIconProps> = ({ iconClassName }) => {
  return <img className={iconClassName} src={Copyright} alt="copyright icon" />;
};

export default CopyrightIcon;
