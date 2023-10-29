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
import NewletterIcon from "@components/icons/newletter-icon";

interface Props {
  className?: string;
}

interface NewsLetterFormValues {
  email: string;
}

const defaultValues = {
  email: ""
};
const WidgetSubscription: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewsLetterFormValues>({
    defaultValues
  });

  function onSubmit(values: NewsLetterFormValues) {
    console.log(values, "News letter");
  }

  const { locale } = useRouter();
  const dir = getDirection(locale);
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-8",
        className
      )}
    >
      <div className={"subs-heading flex gap-2 sm:gap-5 mb-3"}>
        <NewletterIcon className="w-[52px] h-[52px]" color={"white"} />
        <div className={"subs-heading__left"}>
          <Heading variant="checkoutHeading">
            {t("footer:widget-title-description")}
          </Heading>
          <Text>{t("footer:text-subscribe-footer2")}</Text>
        </div>
      </div>
      <form
        className="flex relative z-10  max-w-[400px] lg:max-w-[600px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder={t("forms:placeholder-email-subscribe")}
          type="email"
          id="subscription-email"
          variant="solid"
          className="w-full"
          inputClassName={`ps-5 pe-5  h-12 border-2 border-black/18 ${
            dir == "rtl" ? "rounded-r-3xl" : "rounded-l-3xl"
          }`}
          {...register("email", {
            required: `${t("forms:email-required")}`,
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: `${t("forms:email-error")}`
            }
          })}
          error={errors.email?.message}
        />
        <button
          className={`bg-skin-primary text-sm font-medium text-white md:h-12 py-2 px-10   focus:outline-none focus:shadow-outline ${
            dir == "rtl" ? "rounded-l-3xl -mr-1" : "rounded-r-3xl -ml-1"
          }`}
          aria-label="Subscribe Button"
        >
          {t("footer:text-btnsubscribe")}
        </button>
      </form>
    </div>
  );
};

export default WidgetSubscription;
