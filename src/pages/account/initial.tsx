import Layout from "@components/layout/layout-account";
import AccountLayout from "@components/my-account/account-layout";
import AccountDetails from "@components/my-account/initial";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Seo from "@components/seo/seo";

export default function AccountDetailsPage() {
  return (
    <>
      <Seo
        title="Initial Settings"
        description="Fastest Portal built with Latest Tech To help you manage Your Company, Sites and Projects Easily."
        path="account/initial"
      />
      <AccountLayout>
        <AccountDetails />
      </AccountLayout>
    </>
  );
}

AccountDetailsPage.Layout = Layout;

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
