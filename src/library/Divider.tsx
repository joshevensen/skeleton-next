type props = {
  type?: "vertical" | "horizontal";
  className?: string;
  insideFlex?: boolean;
};

const LibDivider: React.FC<props> = ({
  type = "horizontal",
  className,
  insideFlex = false,
}) => {
  let classes = "bg-border";

  if (type === "horizontal") {
    classes += " w-full h-px";
  } else if (type === "vertical" && insideFlex) {
    classes += " place-self-stretch w-px";
  } else {
    classes += " h-full w-px";
  }

  return <div className={`${className} ${classes}`}></div>;
};

export default LibDivider;
