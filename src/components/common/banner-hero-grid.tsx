import BannerHeroCard from '@components/cards/banner-hero-card';
import useWindowSize from '@utils/use-window-size';

interface BannerProps {
  data: any;
  className?: string;
  girdClassName?: string;
}

const BannerHeroGrid: React.FC<BannerProps> = ({
  data,
  className = 'mb-3 md:mb-4 lg:mb-5 xl:mb-6',
  girdClassName = '2xl:gap-5',
}) => {
  const { width } = useWindowSize();
  return (
      <div className={className}>
        <div
            className={`grid gap-4  grid-cols-1 ${girdClassName ? girdClassName: '2xl:gap-5 '}`}
        >
          {data?.map((banner: any) => (
              <BannerHeroCard
                  key={`banner--key${banner.id}`}
                  banner={banner}
                  effectActive={false}
              />
          ))}
        </div>
      </div>
  );
};

export default BannerHeroGrid;
