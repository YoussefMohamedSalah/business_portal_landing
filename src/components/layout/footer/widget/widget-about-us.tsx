import { useTranslation } from "next-i18next";
import Link from "next/link";
import Logo from "@components/ui/logo";
import Text from "@components/ui/text";
import Image from "@components/ui/image";
import { ROUTES } from "@utils/routes";
import { useRouter } from "next/router";
import { getDirection } from "@utils/get-direction";
import Heading from "@components/ui/heading";

interface AboutProps {
  className?: string;
  social?: {
    id: string | number;
    path?: string;
    name: string;
    image: string;
    width: number;
    height: number;
  }[];
}
const WidgetAbout: React.FC<AboutProps> = ({ social, className }) => {
  const { t } = useTranslation("footer");
  const { locale } = useRouter();
  const dir = getDirection(locale);

  return (
    <div className={`${className}`}>
      <div className="text-sm mx-auto sm:ms-0 pb-2">
        <Heading
          variant="mediumHeading"
          className="text-base mb-4 sm:mb-5 lg:mb-6 pb-0.5"
        >
          {t(`link-contact-us`)}
        </Heading>

        <div className="mb-3">
          {t("text-address")} {t("link-address")}
        </div>
        <div className="mb-3">
          {t("text-phone")} {t("link-phone")}
        </div>
        <div className="mb-3">
          {t("text-mobile")} {t("link-mobile")}
        </div>
        <div className="mb-3">
          {t("text-email")} {t("link-email")}
        </div>
      </div>

      {/* {social && (
        <ul className="flex flex-wrap  space-s-4 md:space-s-5 mx-auto md:mx-0">
          {social?.map((item) => (
            <li
              className="transition hover:opacity-80"
              key={`social-list--key${item.id}`}
            >
              <Link href={item.path ? item.path : '/#'}>
                <a target="_blank" rel="noreferrer">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={item.height}
                    width={item.width}
                    className="transform scale-85 md:scale-100"
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default WidgetAbout;
