import { FC, ReactNode, useState, useEffect } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
  containerStyle?: string;
  textStyle?: string;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "center-left"
    | "center-right";
}

const Tooltip: FC<TooltipProps> = ({
  children,
  text,
  containerStyle,
  textStyle,
  position = "center-right",
}) => {
  const [hovering, setHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const getPositionStyle = (position: TooltipProps["position"]) => {
    switch (position) {
      case "top-left":
        return { bottom: "100%", right: "100%" };
      case "top-center":
        return { bottom: "130%", left: "-150%" };
      case "top-right":
        return { bottom: "100%", left: "100%" };
      case "bottom-left":
        return { top: "100%", right: "100%" };
      case "bottom-center":
        return { bottom: "-100%", left: "50%", transform: "translateX(-50%)" };
      case "bottom-right":
        return { top: "100%", left: "100%" };
      case "center-left":
        return { right: "130%" };
      case "center-right":
        return { left: "130%" };
      default:
        return {};
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (hovering) {
      timeoutId = setTimeout(() => setShowTooltip(true), 800);
    } else {
      setShowTooltip(false);
    }
    return () => clearTimeout(timeoutId);
  }, [hovering]);

  return (
    <div
      className={`tooltip-container${
        containerStyle ? ` ${containerStyle}` : ""
      }`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
      {showTooltip && (
        <span
          className={`tooltip-text${textStyle ? ` ${textStyle}` : ""}`}
          style={getPositionStyle(position)}
        >
          {text}
        </span>
      )}
    </div>
  );
};
export default Tooltip;
