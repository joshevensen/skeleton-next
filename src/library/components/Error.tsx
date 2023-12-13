import Layout from "@/layout/Layout";
import LibNotification, { NotificationTypeEnum } from "./Notification";

type props = {
  error?: any;
  hasLayout?: boolean;
  isToast?: boolean;
};

const LibError: React.FC<props> = ({
  error,
  hasLayout = false,
  isToast = true,
}) => {
  if (error) {
    console.log("error", error.response);
  }

  const content = (
    <LibNotification
      message={error.message}
      type={NotificationTypeEnum.Error}
      isToast={isToast}
      showClose
    />
  );

  if (hasLayout) {
    return <Layout>{content}</Layout>;
  }

  return content;
};

export default LibError;
