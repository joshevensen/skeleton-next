import Link from "next/link";
import { useRouter } from "next/router";
import LibIcon, {
  IconNameEnum,
  IconSizeEnum,
} from "../library/components/Icon";

type props = {
  children: any;
  href: string;
  iconName: IconNameEnum;
  className?: string;
};

const NavLink: React.FC<props> = ({ children, className, iconName, href }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      className={`${
        isActive ? "text-primary" : "text-text-light"
      } flex flex-col items-center font-bold uppercase ${className}`}
      href={href}
    >
      <LibIcon name={iconName} size={IconSizeEnum.Medium} />
      <p className="text-[10px]">{children}</p>
    </Link>
  );
};

export default NavLink;
