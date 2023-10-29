import { useForm } from "react-hook-form";
import Input from "@components/ui/input";
import { useTranslation } from "next-i18next";
import EmailIcon from "@components/icons/email-icon";
import SendIcon from "@components/icons/send-icon";
import Text from "@components/ui/text";
import Heading from "@components/ui/heading";
import { useRouter } from "next/router";
import { getDirection } from "@utils/get-direction";
import cn from "classnames";
import { footer } from "../data";

interface Props {
  className?: string;
}

interface NewsLetterFormValues {
  email: string;
}

const { description } = footer;

const WidgetDescription: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  const { locale } = useRouter();
  const dir = getDirection(locale);
  return (
    <div
      className={cn(
        "flex flex-col bg-no-repeat bg-[length:180px_auto] bg-right-bottom",
        className
      )}
    >
      <Heading
        variant="mediumHeading"
        className="text-base mb-4 sm:mb-5 lg:mb-6 pb-0.5"
      >
        {t("footer:widget-title-description")}
      </Heading>

      <Text className={"pb-4"}>{t("footer:text-description-footer")}</Text>
      <div
        className={
          " form-subscribe flex flex-col items-center justify-between "
        }
      >
        {/* <form
                    className="flex relative z-10 "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <span className="flex items-center absolute start-0 top-0 h-12 px-3.5 transform">
                      <EmailIcon className="w-4 2xl:w-[18px] h-4 2xl:h-[18px]"/>
                    </span>
                    <Input
                        placeholder={t('forms:placeholder-email-subscribe')}
                        type="email"
                        id="subscription-email"
                        variant="solid"
                        className="w-full"
                        inputClassName={`ps-10 md:ps-10 pe-10 md:pe-10 2xl:px-11 h-12 border-1 border-black/18 ${dir == 'rtl' ? 'rounded-r' : 'rounded-l'}`}
                        {...register('email', {
                            required: `${t('forms:email-required')}`,
                            pattern: {
                                value:
                                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: `${t('forms:email-error')}`,
                            },
                        })}
                        error={errors.email?.message}
                    />
                    <button
                        className={`bg-gray-800 text-sm text-white md:h-12 py-2 px-10 hover:bg-skin-primary  focus:outline-none focus:shadow-outline ${dir == 'rtl' ? 'rounded-l -mr-1' : 'rounded-r -ml-1'}`}
                        aria-label="Subscribe Button"
                    >
                        {t('footer:text-btnsubscribe')}
                    </button>
                </form> */}
      </div>
    </div>
  );
};

export default WidgetDescription;
