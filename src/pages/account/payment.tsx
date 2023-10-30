import Layout from "@components/layout/layout-account";
import AccountLayout from "@components/my-account/account-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PaymentBox from "@components/payment/payment-content";
import { usePaymentQuery } from "@framework/payment/payment";
import { GetStaticProps } from "next";
import Seo from "@components/seo/seo";

export default function AccountDetailsPage() {
  let { data, isLoading } = usePaymentQuery();
  return (
    <>
      <Seo
        title="Payment"
        description="Fastest Portal built with Latest Tech To help you manage Your Company, Sites and Projects Easily."
        path="account/payment"
      />
      <AccountLayout>
        {!isLoading ? <PaymentBox items={data?.data} /> : <div>Loading...</div>}
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
