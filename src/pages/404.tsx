import Layout from "@components/layout/layout-landing";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ErrorInformation from "@components/404/error-information";
import Seo from "@components/seo/seo";

export default function ErrorPage() {
  return (
    <>
      <Seo
        title="404"
        description="Fastest Portal built with Latest Tech To help you manage Your Company, Sites and Projects Easily."
        path="404"
      />
      <ErrorInformation />
    </>
  );
}

ErrorPage.Layout = Layout;

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
