import EditorIcon, { EditorIconsEnum } from "./Icon";

type props = {
  iconName: EditorIconsEnum;
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
      <EditorIcon name={iconName} />
    </button>
  );
};

export default EditorButton;
