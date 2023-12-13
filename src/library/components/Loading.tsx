import Layout from "@/layout/Layout";
import LibCard from "./Card";

type props = {
  children?: any;
  isPage?: boolean;
  isCard?: boolean;
  isTall?: boolean;
  isShort?: boolean;
};

const LibLoading: React.FC<props> = ({
  children,
  isPage = false,
  isCard = false,
  isTall = false,
  isShort = false,
}) => {
  let padding = "py-4";
  if (isTall) padding = "py-8";
  if (isShort) padding = "py-2";

  let loadingText = "loading...";
  if (isPage) loadingText = "loading page...";
  if (children) loadingText = children;

  const content = (
    <p className={`${padding} italic text-center leading-none`}>
      {loadingText}
    </p>
  );

  if (isPage) {
    return (
      <Layout>
        <LibCard noPadding>{content}</LibCard>
      </Layout>
    );
  }

  if (isCard) return <LibCard noPadding>{content}</LibCard>;

  return content;
};

export default LibLoading;
