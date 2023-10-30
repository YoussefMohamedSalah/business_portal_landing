import Input from "@components/ui/form/input";
import Button from "@components/ui/button";
import Heading from "@components/ui/heading";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import {
  useInitialDataMutation,
  InitialDataType
} from "@framework/initial/use-initial";

const defaultValues: InitialDataType = {
  otp: "",
  address: "",
  size: "",
  name: ""
};

const AccountDetails: React.FC = () => {
  const { mutate: updateUser, isLoading } = useInitialDataMutation();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InitialDataType>({
    defaultValues
  });
  function onSubmit(values: InitialDataType) {
    console.log(values);
    updateUser(values);
  }

  return (
    <div className="w-full flex flex-col">
      <Heading variant="titleLarge" className="mb-5 md:mb-6 lg:mb-7 lg:-mt-1">
        {t("common:text-account-details-personal")}
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col justify-center"
        noValidate
      >
        <div className="border-skin-base border-b pb-7 md:pb-8 lg:pb-10">
          <div className="flex flex-col space-y-4 sm:space-y-5">
            <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
              <span className="flex items-center justify-center min-w-[30px] md:min-w-[37px] min-h-[30px] bg-skin-fill text-skin-base rounded p-1 mx-1 md:mx-1.5">
                {t("forms:label-otp-content")}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
              <Input
                type="text"
                label={t("forms:label-otp")}
                {...register("otp", {
                  required: "forms:otp-required"
                })}
                variant="solid"
                className="w-full sm:w-1/2 px-1.5 md:px-2.5"
              />
            </div>
          </div>
        </div>
        <Heading
          variant="titleLarge"
          className="mb-5 xl:mb-8 pt-6 md:pt-7 lg:pt-8"
        >
          {t("common:text-account-details-account")}
        </Heading>
        <div className="border-skin-base border-b pb-7 md:pb-9 lg:pb-10">
          <div className="flex flex-col space-y-4 sm:space-y-5">
            <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
              <Input
                type="text"
                label={t("forms:label-company-name")}
                {...register("name", {
                  required: "forms:company-name-required"
                })}
                className="w-full sm:w-1/2 px-1.5 md:px-2.5"
                error={errors.name?.message}
              />
            </div>
            <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
              <Input
                type="text"
                label={t("forms:label-address")}
                {...register("address", {
                  required: "forms:address-required"
                })}
                className="w-full sm:w-1/2 px-1.5 md:px-2.5"
                error={errors.address?.message}
              />
              <Input
                label={t("forms:label-company-size")}
                {...register("size", {
                  required: "forms:size-required"
                })}
                placeholder="EX: 100 - 150"
                error={errors.size?.message}
                className="w-full sm:w-1/2 px-1.5 md:px-2.5"
              />
              {/* <Input
                label={t("forms:label-confirm-password")}
                {...register("size", {
                  required: "forms:password-required"
                })}
                error={errors.size?.message}
                className="w-full sm:w-1/2 px-1.5 md:px-2.5"
              /> */}
            </div>
          </div>
        </div>
        {/* <div className="relative flex pt-6 md:pt-8 lg:pt-10">
          <div className="pe-2.5">
            <Heading className="font-medium mb-1">
              {t("common:text-share-profile-data")}
            </Heading>
            <Text variant="small">
              {t("common:text-share-profile-data-description")}
            </Text>
          </div>
          <div className="ms-auto">
            <Controller
              name="shareProfileData"
              control={control}
              defaultValue={true}
              render={({ field: { value, onChange } }) => (
                <Switch onChange={onChange} checked={value} />
              )}
            />
          </div>
        </div>
        <div className="relative flex mt-5 md:mt-6 lg:mt-7 mb-1 sm:mb-4 lg:mb-6">
          <div className="pe-2.5">
            <Heading className="font-medium mb-1">
              {t("common:text-ads-performance")}
            </Heading>
            <Text variant="small">
              {t("common:text-ads-performance-description")}
            </Text>
          </div>
          <div className="ms-auto">
            <Controller
              name="setAdsPerformance"
              control={control}
              defaultValue={true}
              render={({ field: { value, onChange } }) => (
                <Switch onChange={onChange} checked={value} />
              )}
            />
          </div>
        </div> */}
        <div className="relative flex sm:ms-auto mt-5 pb-2 lg:pb-0">
          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading}
            variant="formButton"
            className="w-full sm:w-auto"
          >
            {t("common:button-save-changes")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
