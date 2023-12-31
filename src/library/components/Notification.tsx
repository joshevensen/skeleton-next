import { createPortal } from "react-dom";
import LibIcon from "./Icon";
import { useEffect, useState } from "react";
import { IconSizes } from "../enums";
import libConfig from "../lib.config";

export enum NotificationTypeEnum {
  Info = 1,
  Warning,
  Error,
  Success,
}

type props = {
  type?: NotificationTypeEnum;
  message: string;
  hide?: boolean;
  isToast?: boolean;
  autoClose?: boolean;
  showClose?: boolean;
  timeToClose?: number;
};

const LibNotification: React.FC<props> = ({
  type = NotificationTypeEnum.Info,
  message,
  hide = false,
  isToast = false,
  showClose = false,
  autoClose = false,
  timeToClose = 4,
}) => {
  const [show, setShow] = useState(!hide);

  useEffect(() => {
    setShow(!hide);
  }, [hide]);

  useEffect(() => {
    if (autoClose) {
      const timeoutId = setTimeout(() => setShow(false), timeToClose * 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [autoClose, show, timeToClose]);

  function closeNotification() {
    setShow(false);
  }

  let colorClasses = "bg-info";
  let iconName = libConfig.icons.Info;

  switch (type) {
    case NotificationTypeEnum.Error:
      colorClasses = "bg-error";
      iconName = libConfig.icons.Danger;
      break;
    case NotificationTypeEnum.Warning:
      colorClasses = "bg-warning";
      iconName = libConfig.icons.Warning;
      break;
    case NotificationTypeEnum.Success:
      colorClasses = "bg-success";
      iconName = libConfig.icons.Success;
      break;
  }

  const content = (
    <div
      className={`flex justify-between items-center max-w-2xl py-2 px-2 ${colorClasses} text-white`}
    >
      <div className="flex items-center space-x-2 pr-5">
        <div className="shrink-0">
          <LibIcon path={iconName} size={IconSizes.Large} />
        </div>
        <p className="text-lg">{message}</p>
      </div>

      {showClose && (
        <button onClick={closeNotification} className="shrink-0 -mr-1">
          <LibIcon path={libConfig.icons.Close} size={IconSizes.Large} />
        </button>
      )}
    </div>
  );

  if (!isToast) {
    return show ? content : null;
  }

  return show
    ? createPortal(content, document.getElementById("notifications")!)
    : null;
};

export default LibNotification;
