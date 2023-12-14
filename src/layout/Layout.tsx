import { Inter } from "next/font/google";
import LayoutLogo from "./Logo";
import LayoutMenu from "./Menu";

const inter = Inter({ subsets: ["latin"] });

type props = {
  children: any;
};

const Layout: React.FC<props> = ({ children }) => {
  const horizontalPadding = "px-4";
  const maxWidth = "max-w-3xl";

  return (
    <div className={inter.className}>
      <header
        className={`py-2 ${horizontalPadding} bg-white border-b border-border`}
      >
        <div
          className={`${maxWidth} mx-auto flex justify-between items-center`}
        >
          <LayoutLogo />

          <LayoutMenu />
        </div>
      </header>

      <main className={`py-4 ${horizontalPadding}`}>
        <div className={`${maxWidth} mx-auto`}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
