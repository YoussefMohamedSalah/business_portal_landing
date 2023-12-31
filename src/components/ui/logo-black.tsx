import Image from 'next/image';
import Link from '@components/ui/link';
import cn from 'classnames';
import { siteSettings } from '@settings/site-settings';

const LogoBack: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  type,
  href = siteSettings.logo.href,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn('inline-flex items-center justify-center focus:outline-none', className)}
      {...props}
    >
      <Image
        src={siteSettings.logo.urlReverse}
        alt={siteSettings.logo.alt}
        height={siteSettings.logo.height}
        width={siteSettings.logo.width}
        layout="fixed"
        loading="eager"
      />
    </Link>
  );
};

export default LogoBack;
