import { ButtonSizes } from "@/library/enums";
import LibButton from "./Button";

type props = {
  children: any;
  count: number;
  message: string;
  buttonText?: string;
  onClick?: () => void;
};

const LibEmpty: React.FC<props> = ({
  children,
  count,
  message,
  buttonText,
  onClick,
}) => {
  return (
    <>
      {count > 0 && children}
      {count === 0 && (
        <div className="py-6 px-2">
          <p className="text-lg italic text-center">{message}</p>

          {buttonText && (
            <div className="mt-3 flex">
              <LibButton onClick={onClick} size={ButtonSizes.Small}>
                {buttonText}
              </LibButton>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LibEmpty;
