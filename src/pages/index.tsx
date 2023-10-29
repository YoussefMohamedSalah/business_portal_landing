import Seo from "@components/seo/seo";
import Layout from "@components/layout/layout-landing";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  homeThreeGridHero as bannerGridHero,
  homeThreeHeroSlider as heroSlider
} from "@framework/static/banner";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { fetchBestSellerProducts } from "@framework/product/get-all-best-seller-products";
import { LIMITS } from "@framework/utils/limits";
import HeroSliderBlock from "@components/hero/hero-slider-block";

export default function Home() {
  return (
    <>
      <Seo
        title="Electronics Store Store React Template"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="landing"
      />
      <HeroSliderBlock
        heroBanner={heroSlider}
        heroContent={false}
        className="mb-5"
        contentClassName="p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[400px] xl:min-h-[560px] 2xl:min-h-[750px]"
      />
    </>
  );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [
      API_ENDPOINTS.BEST_SELLER_PRODUCTS,
      { limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS }
    ],
    fetchBestSellerProducts
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer"
      ]))
    },
    revalidate: 60
  };
};
