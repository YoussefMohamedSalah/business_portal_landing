import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import Heading from '@components/ui/heading';
import Text from '@components/ui/text';

interface Props {
  sectionHeading?: string;
  sectionSubHeading?: string;
  className?: string;
  headingPosition?: 'left' | 'center';
}

const SectionHeader: React.FC<Props> = ({
  sectionHeading = 'text-section-title',
  sectionSubHeading,
  className = 'pb-0.5 mb-5 xl:mb-6',
  headingPosition = 'left',
}) => {
  const { t } = useTranslation('common');
  return (
    <div
      className={cn(` ${className}`, {
        'text-center pb-2 lg:pb-3 xl:pb-4 lg:max-w-[450px] lg:mx-auto':
          headingPosition === 'center',
      })}
    >
      <Heading
        variant="titleLarge"
        className={cn({
          '3xl:text-[25px] 3xl:leading-9': headingPosition === 'center',
        })}

      >
          <div  dangerouslySetInnerHTML={{
                  __html: t(sectionHeading),
              }}>

          </div>
      </Heading>
      {sectionSubHeading && headingPosition === 'center' && (
        <Text variant="small" className="text-gray-500 text-sm pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3 ">
          {t(sectionSubHeading)}
        </Text>
      )}
    </div>
  );
};

export default SectionHeader;
