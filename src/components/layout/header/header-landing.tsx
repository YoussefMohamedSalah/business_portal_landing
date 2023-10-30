import { useRef } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import cn from "classnames";
import { ROUTES } from "@utils/routes";
import { useUI } from "@contexts/ui.context";
import { siteSettings } from "@settings/site-settings";
import Logo from "@components/ui/logo";
import HeaderMenu from "@components/layout/header/header-menu";
import { useModalAction } from "@components/common/modal/modal.context";
import { AiOutlineUser } from "react-icons/ai";
import LanguageSwitcher from "@components/ui/language-switcher";
import { addActiveScroll } from "@utils/add-active-scroll";
import useOnClickOutside from "@utils/use-click-outside";

const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;

const Header: React.FC = () => {
  const { t } = useTranslation("common");
  const { displayMobileSearch, closeSearch, isAuthorized } = useUI();
  const { openModal } = useModalAction();
  const siteHeaderRef = useRef() as DivElementRef;
  const siteSearchRef = useRef() as DivElementRef;
  addActiveScroll(siteHeaderRef, 60);
  useOnClickOutside(siteSearchRef, () => closeSearch());

  function handleLogin() {
    openModal("LOGIN_VIEW");
  }

  return (
    <>
      <header
        id="siteHeader"
        ref={siteHeaderRef}
        className={cn(
          "header-three sticky-header sticky z-50 w-full ",
          displayMobileSearch && "active-mobile-search"
        )}
      >
        <div className="innerSticky bg-skin-three lg:w-full transition-all duration-200 ease-in-out body-font  z-20">
          <div className="navbar top-6 lg:block px-4 lg:px-10">
            <div className="flex justify-between items-center md:gap-8 py-2 lg:py-0">
              <Logo className="transition-all duration-200 ease-in-out " />
              <div className="hidden lg:flex">
                <HeaderMenu
                  data={site_header.menu}
                  className="hidden lg:flex transition-all duration-200 ease-in-out"
                />
              </div>
              <div className="flex flex-shrink-0 flex items-center space-x-4">
                <div className="lg:flex hidden items-center flex-shrink-0 accountButton">
                  <AuthMenu
                    isAuthorized={isAuthorized}
                    href={ROUTES.ACCOUNT}
                    btnProps={{
                      children: (
                        <AiOutlineUser className=" text-xl lg:text-3xl" />
                      ),
                      onClick: handleLogin
                    }}
                  >
                    {t("text-portal")}
                  </AuthMenu>
                </div>
                <div className="flex space-s-5 xl:space-s-8 lg:max-w-[33%]">
                  <div className="lg:flex items-center flex-shrink-0 accountButton">
                    <div className="flex flex-shrink-0 smx-auto max-w-[1920px]pace-s-5">
                      <LanguageSwitcher
                        classNameLink={"text-current text-white"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
