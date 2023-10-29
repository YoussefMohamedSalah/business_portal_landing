import { useRef } from "react";
import Container from "@components/ui/container";
import LanguageSwitcher from "@components/ui/language-switcher";
import LogoBack from "@components/ui/logo-black";

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const Header: React.FC = () => {
  const siteHeaderRef = useRef() as DivElementRef;

  return (
    <>
      <header
        id="siteHeader"
        ref={siteHeaderRef}
        className="header-two sticky-header sticky top-0 z-50 lg:relative w-full bg-skin-three"
      >
        <div className="innerSticky w-screen lg:w-full transition-all duration-200 ease-in-out body-font bg-white z-20">
          <div className="border-b border-white/10 bg-skin-three">
            <Container>
              <div className="flex bg-skin-three items-center justify-between  py-2 md:py-6">
                <LogoBack className="logo ps-3 md:ps-0 lg:mx-0" />
                {/* End of logo */}
                <div className="flex space-s-5 xl:space-s-8 lg:max-w-[33%]">
                  <div className="lg:flex items-center flex-shrink-0 accountButton">
                    <div className="flex flex-shrink-0 smx-auto max-w-[1920px]pace-s-5">
                      <LanguageSwitcher classNameLink={"text-current text-white"} />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
