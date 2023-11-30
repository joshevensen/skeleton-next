import { IconNameEnum } from "../library/Icon";
import NavLink from "./NavLink";
import appConfig from "../app.config";
import LayoutLogo from "./Logo";

const LayoutHeader: React.FC = () => {
  const horizontalPadding = appConfig.layout.horizontalPadding;
  const maxWidth = appConfig.layout.maxWidth;

  return (
    <header
      className={`py-2 ${horizontalPadding} bg-white border-b border-border`}
    >
      <div className={`${maxWidth} mx-auto flex justify-between items-center`}>
        <LayoutLogo />

        <nav className="flex items-center ml-6 space-x-6">
          <NavLink
            href={"/"}
            iconName={IconNameEnum.Home}
            className="hidden md:flex"
          >
            Home
          </NavLink>

          <NavLink href={"/library"} iconName={IconNameEnum.Library}>
            Library
          </NavLink>

          <NavLink href={"/settings"} iconName={IconNameEnum.Settings}>
            Settings
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;
