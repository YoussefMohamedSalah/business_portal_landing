import Layout from "@components/layout/layout-account";
import AccountLayout from "@components/my-account/account-layout";
import Legal from "@components/my-account/notice";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Seo from "@components/seo/seo";

export default function LegalNotice() {
  return (
    <>
      <Seo
        title="Legal Notice"
        description="Fastest Portal built with Latest Tech To help you manage Your Company, Sites and Projects Easily."
        path="legal-notice"
      />
      <AccountLayout>
        <Legal />
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
        "legal",
        "footer"
      ]))
    }
  };
};
