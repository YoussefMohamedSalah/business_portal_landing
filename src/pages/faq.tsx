import Layout from "@components/layout/layout-landing";
import Container from "@components/ui/container";
import PageHeroSection from "@components/ui/page-hero-section";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Accordion from "@components/ui/accordion";
import { faq } from "@settings/faq-settings";
import Seo from "@components/seo/seo";

export default function TermsPage() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Fastest Portal built with Latest Tech To help you manage Your Company, Sites and Projects Easily."
        path="faq"
      />
      <PageHeroSection heroTitle="text-page-faq" />
      <Container>
        <div className="flex flex-col max-w-2xl xl:max-w-4xl mx-auto py-12 md:py-20">
          {faq?.map((item, index) => (
            <Accordion
              key={`${item.title}-${index}`}
              item={item}
              translatorNS="faq"
            />
          ))}
        </div>
      </Container>
    </>
  );
}

TermsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "faq",
        "footer"
      ]))
    }
  };
};
