import libConfig from "@/library/lib.config";
import NavLink from "./NavLink";

type props = {
  className?: string;
};

const LayoutMenu: React.FC<props> = ({ className }) => {
  return (
    <nav className={`flex items-center ml-6 space-x-6 ${className}`}>
      <NavLink
        href={"/"}
        iconPath={libConfig.icons.Home}
        className="hidden md:flex"
      >
        Home
      </NavLink>

      <NavLink href={"/library"} iconPath={libConfig.icons.Library}>
        Library
      </NavLink>

      <NavLink href={"/settings"} iconPath={libConfig.icons.Settings}>
        Settings
      </NavLink>
    </nav>
  );
};

export default LayoutMenu;
