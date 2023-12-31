import Layout from "@components/layout/layout-landing";
import Container from "@components/ui/container";
import Heading from "@components/ui/heading";
import PageHeroSection from "@components/ui/page-hero-section";
import { privacyPolicy } from "@settings/privacy-settings";
import { Link, Element } from "react-scroll";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import Seo from "@components/seo/seo";

function makeTitleToDOMId(title: string) {
  return title.toLowerCase().split(" ").join("_");
}

export default function PrivacyPage() {
  const { t } = useTranslation("privacy");
  return (
    <>
      <Seo
        title="Privacy"
        description="Fastest Portal built with Latest Tech To help you manage Your Company, Sites and Projects Easily."
        path="privacy"
      />
      <PageHeroSection heroTitle="text-page-privacy-policy" />
      <div className="py-12 lg:py-16 2xl:py-20 ">
        <Container>
          <div className="flex flex-col md:flex-row">
            <nav className="hidden sm:block md:w-72 xl:w-2/12 mb-8 2xl:mb-0 lg:-mt-2">
              <ol className="sticky md:top-16 lg:top-20 z-10">
                {privacyPolicy?.map((item, index) => (
                  <li key={index}>
                    <Link
                      spy={true}
                      offset={-120}
                      smooth={true}
                      duration={200}
                      to={makeTitleToDOMId(t(item.title))}
                      activeClass="text-skin-primary font-medium borderColor border-black relative ps-3"
                      className="block transition-all cursor-pointer py-3 text-sm lg:text-15px text-skin-base font-medium"
                    >
                      {t(item.title)}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            {/* End of section scroll spy menu */}

            <div className="md:w-10/12 md:ps-8">
              {privacyPolicy?.map((item) => (
                // @ts-ignore
                <Element
                  key={item.title}
                  id={makeTitleToDOMId(t(item.title))}
                  className="mb-8 lg:mb-12 last:mb-0 order-list-enable"
                >
                  <Heading className="mb-4 lg:mb-6 font-body" variant="title">
                    {t(item.title)}
                  </Heading>
                  <div
                    className="text-skin-muted text-sm lg:text-15px leading-7 space-y-5"
                    dangerouslySetInnerHTML={{
                      __html: t(item.description)
                    }}
                  />
                </Element>
              ))}
            </div>
            {/* End of content */}
          </div>
        </Container>
      </div>
    </>
  );
}

PrivacyPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "privacy",
        "footer"
      ]))
    }
  };
};
