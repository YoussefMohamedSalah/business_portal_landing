import LandingHeader from "@components/layout/header/header-landing";
import Footer from "@components/layout/footer/footer";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation-landing";
import BackToTopButton from "@components/ui/back-to-top";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main
        className="relative flex-grow page-index"
        style={{
          WebkitOverflowScrolling: "touch"
        }}
      >
        <>{children}</>
      </main>
      <Footer />
      <BackToTopButton />
      <MobileNavigation />
    </div>
  );
};

export default Layout;
