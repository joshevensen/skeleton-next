import Link from "next/link";

type props = {
  children: any;
  href: string;
};

const LibLink: React.FC<props> = ({ children, href }) => {
  return <Link href={href}>{children}</Link>;
};

export default LibLink;
