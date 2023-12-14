import Icon from "@mdi/react";
import { IconSizes } from "../enums";

type props = {
  iconPath: string;
  onClick: () => void;
  isDisabled?: boolean;
  isActive?: boolean;
};

const EditorButton: React.FC<props> = ({
  iconPath,
  onClick,
  isDisabled = false,
  isActive = false,
}) => {
  const defaultClasses = "p-1";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={
        isActive
          ? `${defaultClasses} bg-primary text-white`
          : `${defaultClasses} hover:bg-secondary hover:text-white`
      }
    >
      <Icon path={iconPath} size={IconSizes.Small} />
    </button>
  );
};

export default EditorButton;
