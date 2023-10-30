import Layout from "@components/layout/layout-account";
import AccountLayout from "@components/my-account/account-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import Seo from "@components/seo/seo";

export default function LegalNotice() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title="Wishlist"
        description="Fastest Portal built with Latest Tech To help you manage Your Company, Sites and Projects Easily."
        path="account/wishlist"
      />
      <AccountLayout>
        <h2 className="text-base md:text-lg xl:text-[20px] font-medium text-skin-base  lg:pt-0">
          {t("common:text-account-wishlist")}
        </h2>
      </AccountLayout>
    </>
  );
}

LegalNotice.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer"
      ]))
    }
  };
};
