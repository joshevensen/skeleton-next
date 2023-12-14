import { IconSizes } from "../enums";
import libConfig from "../lib.config";
import LibIcon from "./Icon";
import LibLink from "./Link";

type props = {
  href: string;
};

const LibBack: React.FC<props> = ({ href }) => {
  return (
    <LibLink href={href}>
      <div className="flex items-center font-bold">
        <LibIcon path={libConfig.icons.Back} size={IconSizes.Small} /> back
      </div>
    </LibLink>
  );
};

export default LibBack;
