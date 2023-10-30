import { SAFlag } from "@components/icons/language/SAFlag";
import { USFlag } from "@components/icons/language/USFlag";

export const siteSettings = {
  name: "Cp-Portal",
  description:
    "Introducing cp-portal, the ultimate solution for construction companies, revolutionizing the way you manage projects and streamline your operations. Our powerful web application is designed to enhance efficiency, collaboration, and productivity throughout every stage of the construction process.",
  author: {
    name: "CP-PORTAL.",
    websiteUrl: "https://cp-portal.com",
    address: ""
  },
  logo: {
    url: "/assets/images/logo.png",
    urlReverse: "/assets/images/logo.png",
    alt: "cp-portal",
    href: "/",
    width: 80,
    height: 40
  },
  defaultLanguage: "en",
  currencyCode: "USD",
  site_header: {
    menu: [
      {
        id: 1,
        path: "/about-us",
        label: "menu-about-us"
      },
      {
        id: 2,
        path: "/contact-us",
        label: "menu-contact-us"
      },
      {
        id: 3,
        path: "/faq",
        label: "menu-faq"
      },
      {
        id: 4,
        path: "/terms",
        label: "menu-terms-condition"
      }
    ],
    languageMenu: [
      {
        id: "ar",
        name: "عربى ",
        value: "ar",
        icon: <SAFlag />
      },
      {
        id: "en",
        name: "English",
        value: "en",
        icon: <USFlag />
      }
    ]
  }
};
