import LibButton, {
  ButtonTypeEnum,
  ButtonSizeEnum,
  ButtonColorEnum,
} from "./Button";
import { IconNameEnum, IconSizeEnum } from "./Icon";

type props = {
  className?: string;
};

const LibPagination: React.FC<props> = ({ className }) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <p className="text-sm">1-10 of 35</p>

      <div className="flex justify-center items-center">
        <LibButton
          type={ButtonTypeEnum.Icon}
          iconName={IconNameEnum.Prev}
          iconSize={IconSizeEnum.Large}
        />

        <div className="flex mx-2 sm:mx-4 space-x-2">
          <LibButton
            type={ButtonTypeEnum.Outline}
            size={ButtonSizeEnum.Small}
            color={ButtonColorEnum.Light}
          >
            1
          </LibButton>
          <LibButton
            type={ButtonTypeEnum.Outline}
            size={ButtonSizeEnum.Small}
            color={ButtonColorEnum.Light}
          >
            2
          </LibButton>
          <LibButton
            type={ButtonTypeEnum.Outline}
            size={ButtonSizeEnum.Small}
            color={ButtonColorEnum.Light}
          >
            3
          </LibButton>
          <LibButton
            type={ButtonTypeEnum.Outline}
            size={ButtonSizeEnum.Small}
            color={ButtonColorEnum.Light}
          >
            4
          </LibButton>
        </div>

        <LibButton
          type={ButtonTypeEnum.Icon}
          iconName={IconNameEnum.Next}
          iconSize={IconSizeEnum.Large}
        />
      </div>
    </div>
  );
};

export default LibPagination;
