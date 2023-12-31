import Layout from "@components/layout/layout-account";
import AccountLayout from "@components/my-account/account-layout";
import Help from "@components/my-account/help";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Seo from "@components/seo/seo";

export default function HelpCenter() {
  return (
    <>
      <Seo
        title="Help Center"
        description="Fastest Portal built with Latest Tech To help you manage Your Company, Sites and Projects Easily."
        path="account/help-center"
      />
      <AccountLayout>
        <Help />
      </AccountLayout>
    </>
  );
}

HelpCenter.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "help",
        "footer"
      ]))
    }
  };
};
