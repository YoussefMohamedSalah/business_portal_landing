import Header from "@components/layout/header/header-account";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation-account";
import Copyright from "@components/layout/footer/copyright";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="relative flex-grow page-index"
        style={{
          WebkitOverflowScrolling: "touch"
        }}
      >
        <>{children}</>
      </main>
      <Copyright />
      <MobileNavigation />
    </div>
  );
};

export default Layout;
