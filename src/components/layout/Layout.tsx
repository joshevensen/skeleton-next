import appConfig from "@/app.config";
import LayoutHeader from "./Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type props = {
  children: any;
};

const Layout: React.FC<props> = ({ children }) => {
  const horizontalPadding = appConfig.layout.horizontalPadding;
  const maxWidth = appConfig.layout.maxWidth;

  return (
    <div className={inter.className}>
      <LayoutHeader />

      <main className={`py-4 ${horizontalPadding}`}>
        <div className={`${maxWidth} mx-auto`}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
