import { IconNames, IconSizes } from "../enums";
import LibIcon from "./Icon";
import LibLink from "./Link";

type props = {
  href: string;
};

const LibBack: React.FC<props> = ({ href }) => {
  return (
    <LibLink href={href}>
      <div className="flex items-center font-bold">
        <LibIcon name={IconNames.Back} size={IconSizes.Small} /> back
      </div>
    </LibLink>
  );
};

export default LibBack;
