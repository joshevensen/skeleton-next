import { createPortal } from "react-dom";
import { ReactNode } from "react";
import LibIcon from "./Icon";
import { IconSizes } from "../enums";
import libConfig from "../lib.config";

type props = {
  isOpen: boolean;
  closeOutside?: boolean;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  heading?: string;
  showHeader?: boolean;
};

const LibModal: React.FC<props> = ({
  isOpen,
  closeOutside = true,
  onClose,
  children,
  footer,
  heading,
}) => {
  function closeModal(close: boolean) {
    if (close) onClose();
  }

  return isOpen
    ? createPortal(
        <div className="fixed inset-0 flex justify-center items-center">
          <div
            className="absolute inset-0 z-30 bg-gray-900 opacity-70"
            onClick={closeModal.bind("close", closeOutside)}
          ></div>

          <div className="z-50 w-[90%] max-w-lg max-h-[96%] flex flex-col bg-white rounded-lg">
            <div className="py-1 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="pl-4 pr-3 text-lg font-medium uppercase">
                  {heading}
                </h3>

                <div
                  className="p-2 text-gray-500 hover:text-secondary cursor-pointer"
                  onClick={closeModal.bind("close", true)}
                >
                  <LibIcon
                    path={libConfig.icons.Close}
                    size={IconSizes.Large}
                  />
                </div>
              </div>
            </div>

            <div className="grow overflow-y-auto px-4">{children}</div>

            {footer && (
              <div className="flex items-center h-16 py-2 px-4 border-t border-gray-300">
                {footer}
              </div>
            )}
            {!footer && <div className="h-1"></div>}
          </div>
        </div>,
        document.getElementById("modal")!
      )
    : null;
};

export default LibModal;
