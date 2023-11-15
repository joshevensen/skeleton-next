import Link from "next/link";

type props = {
  children: any;
  href: string;
  className?: string;
};

const LibLink: React.FC<props> = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={`text-link hover:text-link-hover ${className}`}
    >
      {children}
    </Link>
  );
};

export default LibLink;
