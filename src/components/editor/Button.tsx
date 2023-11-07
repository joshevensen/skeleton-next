import LibIcon, { IconNameEnum, IconSizeEnum } from "../library/Icon";

type props = {
  iconName: IconNameEnum;
  onClick: () => void;
  isDisabled?: boolean;
  isActive?: boolean;
};

const EditorButton: React.FC<props> = ({
  iconName,
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
      <LibIcon name={iconName} size={IconSizeEnum.Small} />
    </button>
  );
};

export default EditorButton;
