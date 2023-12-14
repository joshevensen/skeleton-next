import Link from "next/link";
import { useRouter } from "next/router";
import LibIcon from "../library/components/Icon";

type props = {
  children: any;
  href: string;
  iconPath: string;
  className?: string;
};

const NavLink: React.FC<props> = ({ children, className, iconPath, href }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      className={`${
        isActive ? "text-primary" : "text-text-light"
      } flex flex-col items-center font-bold uppercase ${className}`}
      href={href}
    >
      <LibIcon path={iconPath} />
      <p className="text-[10px]">{children}</p>
    </Link>
  );
};

export default NavLink;
