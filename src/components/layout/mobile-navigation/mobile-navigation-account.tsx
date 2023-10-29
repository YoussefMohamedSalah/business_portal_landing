import Link from "@components/ui/link";
import MenuIcon from "@components/icons/menu-icon";
import HomeIcon from "@components/icons/home-icon";
import { useUI } from "@contexts/ui.context";
import { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";
import dynamic from "next/dynamic";
import { Drawer } from "@components/common/drawer/drawer";
import { getDirection } from "@utils/get-direction";
import { useModalAction } from "@components/common/modal/modal.context";
import { useTranslation } from "next-i18next";
import LogoutIcon from "@components/icons/account-logout";
import { useLogoutMutation } from "@framework/auth/use-logout";
import { AiOutlineUser } from "react-icons/ai";

const AuthMenu = dynamic(() => import("@components/layout/header/auth-menu"), {
	ssr: false
});
const MobileMenu = dynamic(
	() => import("@components/layout/header/mobile-menu")
);

const BottomNavigation: React.FC = () => {
	const { t } = useTranslation("common");
	const { mutate: logout } = useLogoutMutation();

	const {
		openSidebar,
		closeSidebar,
		displaySidebar,
		isAuthorized
	} = useUI();
	const { openModal } = useModalAction();

	const { locale } = useRouter();
	const dir = getDirection(locale);
	const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };
	function handleLogin() {
		openModal("LOGIN_VIEW");
	}
	function handleMobileMenu() {
		return openSidebar();
	}

	return (
		<>
			<div className="lg:hidden fixed z-30 -bottom-0.5 flex items-center justify-between shadow-bottomNavigation body-font bg-skin-fill w-full h-14 px-4 md:px-6 lg:px-8 text-skin-muted pb-0.5">
				<button
					aria-label="Menu"
					className="flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
					onClick={handleMobileMenu}
				>
					<MenuIcon />
				</button>
				<Link href={ROUTES.HOME} className="flex-shrink-0">
					<span className="sr-only">{t("breadcrumb-home")}</span>
					<HomeIcon />
				</Link>
				<div className="flex items-center flex-shrink-0 accountButton ">
					<AuthMenu
						isAuthorized={isAuthorized}
						href={ROUTES.ACCOUNT}
						btnProps={{
							children: (
								<AiOutlineUser className=" text-xl lg:text-3xl text-skin-base" />
							),
							onClick: handleLogin
						}}
					>
						<button
							className="w-full flex items-center text-sm lg:text-15px text-skin-base py-3 px-4 md:px-5 cursor-pointer focus:outline-none"
							onClick={() => logout()}
						>
							<LogoutIcon className=" text-xl lg:text-3xl text-skin-base" />
						</button>
					</AuthMenu>
				</div>
			</div>
			<Drawer
				placement={dir === "rtl" ? "right" : "left"}
				open={displaySidebar}
				onClose={closeSidebar}
				handler={false}
				showMask={true}
				level={null}
				contentWrapperStyle={contentWrapperCSS}
			>
				<MobileMenu />
			</Drawer>
		</>
	);
};

export default BottomNavigation;
