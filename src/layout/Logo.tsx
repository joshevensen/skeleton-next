import Link from "next/link";

const LayoutLogo: React.FC = () => {
  return (
    <Link href="/">
      <p className="text-2xl font-bold text-primary">Acme Blog</p>
    </Link>
  );
};

export default LayoutLogo;
