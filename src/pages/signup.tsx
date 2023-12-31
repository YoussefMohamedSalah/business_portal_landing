import Layout from "@components/layout/layout-landing";
import SignupForm from "@components/auth/sign-up-form";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Seo from "@components/seo/seo";

export default function SignInPage() {
  return (
    <>
      <Seo
        title="Sign Up"
        description="Fastest Portal built with Latest Tech To help you manage Your Company, Sites and Projects Easily."
        path="signup"
      />

      <div className="flex justify-center items-center">
        <div className="py-10 lg:py-16">
          <SignupForm
            isPopup={false}
            className="border border-skin-base rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

SignInPage.Layout = Layout;

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
