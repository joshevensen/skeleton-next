import { ButtonColors, ButtonSizes, ButtonTypes } from "../enums";
import libConfig from "../lib.config";
import LibButton from "./Button";

type props = {
  className?: string;
};

const LibPagination: React.FC<props> = ({ className }) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <p className="text-sm">1-10 of 35</p>

      <div className="flex justify-center items-center">
        <LibButton
          type={ButtonTypes.Icon}
          iconPath={libConfig.icons.Prev}
          size={ButtonSizes.Large}
        />

        <div className="flex mx-2 sm:mx-4 space-x-2">
          <LibButton
            type={ButtonTypes.Outline}
            size={ButtonSizes.Small}
            color={ButtonColors.Light}
          >
            1
          </LibButton>
          <LibButton
            type={ButtonTypes.Outline}
            size={ButtonSizes.Small}
            color={ButtonColors.Light}
          >
            2
          </LibButton>
          <LibButton
            type={ButtonTypes.Outline}
            size={ButtonSizes.Small}
            color={ButtonColors.Light}
          >
            3
          </LibButton>
          <LibButton
            type={ButtonTypes.Outline}
            size={ButtonSizes.Small}
            color={ButtonColors.Light}
          >
            4
          </LibButton>
        </div>

        <LibButton
          type={ButtonTypes.Icon}
          iconPath={libConfig.icons.Next}
          size={ButtonSizes.Large}
        />
      </div>
    </div>
  );
};

export default LibPagination;
